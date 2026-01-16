'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

const initialState = {
  success: false,
  message: '',
  errors: {},
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success && state.message) {
    return (
      <div className='rounded-lg bg-green-900/20 border border-green-500/30 p-6 text-center'>
        <svg
          className='w-12 h-12 mx-auto mb-4 text-green-500'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <p className='text-green-400 text-lg font-medium'>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className='space-y-6'>
      {/* Honeypot field - hidden from users, traps bots */}
      <div className='hidden' aria-hidden='true'>
        <label htmlFor='website'>Website</label>
        <input
          type='text'
          id='website'
          name='website'
          tabIndex={-1}
          autoComplete='off'
        />
      </div>

      {/* Name Field */}
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-wild_sand mb-2'
        >
          Name <span className='text-sunset_orange'>*</span>
        </label>
        <input
          type='text'
          id='name'
          name='name'
          required
          minLength={2}
          maxLength={100}
          autoComplete='name'
          placeholder='Your name'
          className={`w-full px-4 py-3 rounded-lg bg-ebony border ${
            state.errors?.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-600 focus:border-sunset_orange focus:ring-sunset_orange'
          } text-wild_sand placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors`}
        />
        {state.errors?.name && (
          <p className='mt-1 text-sm text-red-400'>{state.errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-wild_sand mb-2'
        >
          Email <span className='text-sunset_orange'>*</span>
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          autoComplete='email'
          placeholder='your.email@example.com'
          className={`w-full px-4 py-3 rounded-lg bg-ebony border ${
            state.errors?.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-600 focus:border-sunset_orange focus:ring-sunset_orange'
          } text-wild_sand placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors`}
        />
        {state.errors?.email && (
          <p className='mt-1 text-sm text-red-400'>{state.errors.email}</p>
        )}
      </div>

      {/* Phone Field (Optional) */}
      <div>
        <label
          htmlFor='phone'
          className='block text-sm font-medium text-wild_sand mb-2'
        >
          Phone <span className='text-gray-500'>(optional)</span>
        </label>
        <input
          type='tel'
          id='phone'
          name='phone'
          autoComplete='tel'
          placeholder='(123) 456-7890'
          className={`w-full px-4 py-3 rounded-lg bg-ebony border ${
            state.errors?.phone
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-600 focus:border-sunset_orange focus:ring-sunset_orange'
          } text-wild_sand placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors`}
        />
        {state.errors?.phone && (
          <p className='mt-1 text-sm text-red-400'>{state.errors.phone}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-wild_sand mb-2'
        >
          Message <span className='text-sunset_orange'>*</span>
        </label>
        <textarea
          id='message'
          name='message'
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder='Tell me about your project...'
          className={`w-full px-4 py-3 rounded-lg bg-ebony border ${
            state.errors?.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-600 focus:border-sunset_orange focus:ring-sunset_orange'
          } text-wild_sand placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors resize-y min-h-[120px]`}
        />
        {state.errors?.message && (
          <p className='mt-1 text-sm text-red-400'>{state.errors.message}</p>
        )}
      </div>

      {/* Error Message */}
      {!state.success && state.message && (
        <div className='rounded-lg bg-red-900/20 border border-red-500/30 p-4'>
          <p className='text-red-400 text-sm'>{state.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type='submit'
        disabled={isPending}
        className='w-full md:w-auto px-8 py-3 rounded-lg bg-sunset_orange text-white font-medium hover:bg-sunset_orange/80 focus:outline-none focus:ring-2 focus:ring-sunset_orange focus:ring-offset-2 focus:ring-offset-ebony disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2'
      >
        {isPending ? (
          <>
            <svg
              className='animate-spin h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              />
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
              />
            </svg>
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
