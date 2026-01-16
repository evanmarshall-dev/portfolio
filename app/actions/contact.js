'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s()+-]*$/.test(val),
      'Please enter a valid phone number'
    ),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  // Honeypot field - should be empty
  website: z.string().max(0, 'Bot detected'),
});

// Rate limiting store (in-memory, resets on deployment)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute per IP

function checkRateLimit(identifier) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  // Clean up old entries
  const requests = rateLimitStore.get(identifier) || [];
  const recentRequests = requests.filter((time) => time > windowStart);

  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }

  recentRequests.push(now);
  rateLimitStore.set(identifier, recentRequests);
  return true;
}

export async function submitContactForm(prevState, formData) {
  try {
    // Extract form data
    const rawData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      message: formData.get('message'),
      website: formData.get('website') || '', // Honeypot
    };

    // Check honeypot (bot trap)
    if (rawData.website) {
      // Silently fail for bots - they won't know it didn't work
      return { success: true, message: 'Thank you for your message!' };
    }

    // Rate limiting using email as identifier
    const identifier = rawData.email.toLowerCase();
    if (!checkRateLimit(identifier)) {
      return {
        success: false,
        message: 'Too many requests. Please try again in a minute.',
        errors: {},
      };
    }

    // Validate form data
    const validationResult = contactSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors = {};
      validationResult.error.issues.forEach((issue) => {
        const field = issue.path[0];
        errors[field] = issue.message;
      });

      return {
        success: false,
        message: 'Please fix the errors below.',
        errors,
      };
    }

    const { name, email, phone, message } = validationResult.data;

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <noreply@evanmarshall.dev>',
      to: ['me@evanmarshall.dev'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff533d;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(
              email
            )}">${escapeHtml(email)}</a></p>
            ${
              phone
                ? `<p><strong>Phone:</strong> <a href="tel:${escapeHtml(
                    phone
                  )}">${escapeHtml(phone)}</a></p>`
                : ''
            }
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
        errors: {},
      };
    }

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      errors: {},
    };
  }
}

// Helper function to escape HTML and prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
