'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import glooscapPic from '@/public/images/glooscap_thumb.png';
import hearmstrongPic from '@/public/images/hearmstrong_thumb.png';
import hockleyDentistryPic from '@/public/images/hockley-dentistry_thumb.png';
import gatesInsurancePic from '@/public/images/gatesinsurance_thumb.png';
import TripleETechPic from '@/public/images/tripleetech_thumb.png';
import safeguardPic from '@/public/images/safeguard_thumb.png';
import steppingStonePic from '@/public/images/stepping-stone_thumb.png';
import eliteAutoPic from '@/public/images/elite-auto_thumb.png';
import acadiaRefrigePic from '@/public/images/acadia-refrige_thumb.png';
import fleetworxPic from '@/public/images/fleetworx_thumb.png';
import courtesyFlushersPic from '@/public/images/courtesy-flushers_thumb.png';

const projects = [
  {
    name: 'Glooscap First Nation',
    href: 'https://glooscapfirstnation.com/',
    src: glooscapPic,
    github: null,
    brand: {
      hasCustomLogo: true,
      colors: ['#B52F2D', '#207178'],
      typography: ['Ivymode', 'Open Sans'],
      icons: null,
    },
    dev: {
      techStack: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      features: [
        'Cultural Heritage Gallery',
        'Event Calendar',
        'Community News',
        'Responsive Design',
        'Enhanced logo for website use',
      ],
    },
  },
  {
    name: 'Valley Burner Service',
    href: 'https://www.valleyburnerservice.com/',
    src: hearmstrongPic,
    github: 'https://github.com/Hearmstrong/hearmstrong-website',
    brand: {
      hasCustomLogo: true,
      colors: [
        'rgb(71 109 145)',
        'rgb(254 233 114)',
        'rgb(68 209 253)',
        'rgb(17 24 39)',
      ],
      typography: ['Inter', 'System Fonts'],
      icons: 'Custom SVG set',
    },
    dev: {
      techStack: ['React', 'Next.js', 'Vercel', 'Tailwind CSS'],
      features: [
        'Service Booking',
        'Emergency Contact',
        'Service Areas Map',
        'Customer Reviews',
      ],
    },
  },
  {
    name: 'Courtesy Flushers',
    href: 'https://www.courtesyflushers.ca/',
    src: courtesyFlushersPic,
    github: 'https://github.com/evanmarshall-dev/courtesy-flushers',
    brand: {
      hasCustomLogo: true,
      colors: ['#0c2c94', '#1a3ba8', '#0a2580', '#f8f9ff', '#2563eb'],
      typography: ['Inter', 'System Fonts'],
      icons: 'Emojis: 🚽 🚿 🔧 💧',
    },
    dev: {
      techStack: ['React', 'Next.js', 'TypeScript', 'SCSS'],
      features: [
        'Online Booking',
        'Service Calculator',
        'Photo Gallery',
        'Mobile Optimized',
      ],
    },
  },
  {
    name: 'Hockley Family Dentistry',
    href: 'https://hockleyfamilydentistry.ca/',
    src: hockleyDentistryPic,
    github: null,
    brand: {
      hasCustomLogo: true,
      colors: ['#072c50', '#8bd8bd', '#F5F5F5', '#9b989b'],
      typography: ['Open Sans', 'Helvetica Neue'],
      icons: 'Modified from: flaticon.com',
    },
    dev: {
      techStack: ['WordPress', 'PHP', 'jQuery', 'MySQL'],
      features: [
        'Appointment Booking',
        'Patient Portal',
        'Service Pages',
        'Insurance Info',
      ],
    },
  },
  {
    name: 'Gates Insurance',
    href: 'https://gatesinsurance.ca/',
    src: gatesInsurancePic,
    github: 'https://github.com/evanmarshall-dev/gatesinsurance',
    brand: {
      hasCustomLogo: true,
      colors: ['#212529', '#FF0000', 'hsla(0, 0%, 70%, .2)', '#FFFFFF'],
      typography: ['System Fonts'],
      icons: null,
    },
    dev: {
      techStack: ['PHP', 'GSAP', 'JQuery', 'Bootstrap'],
      features: [
        'Quote Request Form',
        'Policy Info',
        'Claims Process',
        'Contact Integration',
      ],
    },
  },
  {
    name: 'Triple E Tech',
    href: 'https://tripleetech-next.vercel.app/',
    src: TripleETechPic,
    github: 'https://github.com/evanmarshall-dev/tripleetech-next',
    brand: {
      hasCustomLogo: true,
      colors: ['#2685c3', '#1a9dd9', '#52dae0', '#0a0a0a', '#f9fafb'],
      typography: ['Inter', 'Roboto Mono'],
      icons: 'Custom SVG set',
    },
    dev: {
      techStack: ['Next.js', 'React', 'TypeScript', 'SCSS Modules'],
      features: [
        'Modern SPA',
        'SEO Optimized',
        'Dark Theme',
        'Fast Performance',
      ],
    },
  },
  {
    name: 'Safeguard Services',
    href: 'https://safeguardservices.ca/',
    src: safeguardPic,
    github: null,
    brand: {
      hasCustomLogo: true,
      colors: ['#292926', '#f09136', '#FFFFFF'],
      typography: ['Roboto Slab', 'Roboto'],
      icons: null,
    },
    dev: {
      techStack: ['WordPress', 'PHP', 'MySQL', 'CSS3'],
      features: [
        'Service Inquiry',
        'Security Solutions',
        'Client Testimonials',
        '24/7 Contact',
      ],
    },
  },
  {
    name: 'Stepping Stone Preschool',
    href: 'https://steppingstonepreschool.ca/',
    src: steppingStonePic,
    github: null,
    brand: {
      hasCustomLogo: true,
      colors: ['#FF236C', '#FFC259', '#5D58EF', '#FF7F59'],
      typography: ['Open Sans', 'Arial'],
      icons: 'Elegant theme modules',
    },
    dev: {
      techStack: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      features: [
        'Enrollment Form',
        'Program Info',
        'Photo Gallery',
        'Parent Resources',
      ],
    },
  },
  {
    name: 'Elite Auto & Glass',
    href: 'https://www.eliteautoandglass.ca/',
    src: eliteAutoPic,
    github: null,
    brand: {
      hasCustomLogo: true,
      colors: ['#CAEF56', '#666666', '#3EA4CC', '#FFFFFF'],
      typography: ['Open Sans'],
      icons: null,
    },
    dev: {
      techStack: ['WordPress', 'PHP', 'jQuery', 'SEO'],
      features: [
        'Service Booking',
        'Quote Calculator',
        'Before/After Gallery',
        'Reviews',
      ],
    },
  },
  {
    name: 'Acadia Refrigeration',
    href: 'https://acadiarefrigeration.com/',
    src: acadiaRefrigePic,
    github: null,
    brand: {
      hasCustomLogo: true,
      colors: ['#0F3693', '#00BFFF', '#FFFFFF', '#1F1F1F'],
      typography: ['Alata', 'Arial'],
      icons: null,
    },
    dev: {
      techStack: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      features: [
        'Commercial Services',
        'Emergency Repairs',
        'Equipment Sales',
        'Service Areas',
      ],
    },
  },
  {
    name: 'Fleetworx Inc',
    href: 'https://fleetworxinc.ca/',
    src: fleetworxPic,
    github: null,
    brand: {
      hasCustomLogo: true,
      colors: ['#BA2835', '#333333', '#FFFFFF', '#666666'],
      typography: ['Rubik'],
      icons: null,
    },
    dev: {
      techStack: ['WordPress', 'PHP', 'JavaScript', 'SCSS'],
      features: [
        'Fleet Management',
        'GPS Tracking Info',
        'Service Scheduling',
        'Client Portal',
      ],
    },
  },
];

function ColorSwatch({ color }) {
  return (
    <div
      className='w-6 h-6 rounded-full border border-gray-600 shadow-sm'
      style={{ backgroundColor: color }}
      title={color}
    />
  );
}

function TechBadge({ tech }) {
  return (
    <span className='px-2 py-1 text-xs font-medium rounded-full bg-sunset_orange/20 text-sunset_orange border border-sunset_orange/30'>
      {tech}
    </span>
  );
}

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const domain = new URL(project.href).hostname;

  return (
    <article className='group relative overflow-hidden rounded-xl bg-ebony border border-gray-700 hover:border-sunset_orange/50 transition-all duration-300'>
      {/* Image Section */}
      <div className='relative overflow-hidden'>
        <Link href={project.href} target='_blank' rel='noopener noreferrer'>
          <Image
            src={project.src}
            alt={`Thumbnail of ${domain} website, created by Evan Marshall: Professional Web Developer.`}
            className='w-full transition-transform duration-300 group-hover:scale-105'
          />
        </Link>
        {project.brand?.hasCustomLogo && (
          <div className='absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded bg-sunset_orange text-white'>
            Custom Design & Branding
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className='p-5'>
        {/* Project Title */}
        <h3 className='text-xl font-bold text-wild_sand mb-3'>
          {project.name}
        </h3>

        {/* Expand/Collapse Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='w-full text-left text-sm text-sandrift hover:text-sunset_orange transition-colors mb-4 flex items-center gap-2'
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>

        {/* Expandable Details */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className='overflow-hidden'>
            {/* Brand Design Section */}
            {project.brand &&
              (project.brand.colors?.length > 0 ||
                project.brand.typography?.length > 0 ||
                project.brand.icons) && (
                <div className='mb-5 pb-4 border-b border-gray-700'>
                  <h4 className='text-sm font-semibold text-sunset_orange uppercase tracking-wider mb-3'>
                    Brand Design
                  </h4>

                  {/* Color Palette */}
                  {project.brand.colors?.length > 0 && (
                    <div className='mb-3'>
                      <p className='text-xs text-gray-400 mb-2'>
                        Color Palette
                      </p>
                      <div className='flex gap-2'>
                        {project.brand.colors.map((color, index) => (
                          <ColorSwatch key={index} color={color} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Typography */}
                  {project.brand.typography?.length > 0 && (
                    <div className='mb-3'>
                      <p className='text-xs text-gray-400 mb-1'>Typography</p>
                      <p className='text-sm text-wild_sand'>
                        {project.brand.typography.join(' / ')}
                      </p>
                    </div>
                  )}

                  {/* Icon Set */}
                  {project.brand.icons && (
                    <div>
                      <p className='text-xs text-gray-400 mb-1'>Icon Set</p>
                      <p
                        className='text-xl'
                        role='img'
                        aria-label='brand icons'
                      >
                        {project.brand.icons}
                      </p>
                    </div>
                  )}
                </div>
              )}

            {/* Web Development Section */}
            {project.dev &&
              (project.dev.techStack?.length > 0 ||
                project.dev.features?.length > 0) && (
                <div className='mb-4'>
                  <h4 className='text-sm font-semibold text-sunset_orange uppercase tracking-wider mb-3'>
                    Web Development
                  </h4>

                  {/* Tech Stack */}
                  {project.dev.techStack?.length > 0 && (
                    <div className='mb-3'>
                      <p className='text-xs text-gray-400 mb-2'>Tech Stack</p>
                      <div className='flex flex-wrap gap-2'>
                        {project.dev.techStack.map((tech, index) => (
                          <TechBadge key={index} tech={tech} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  {project.dev.features?.length > 0 && (
                    <div>
                      <p className='text-xs text-gray-400 mb-2'>Key Features</p>
                      <ul className='text-sm text-wild_sand space-y-1'>
                        {project.dev.features.map((feature, index) => (
                          <li key={index} className='flex items-center gap-2'>
                            <span className='text-sunset_orange'>•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
          </div>
        </div>

        {/* Action Links */}
        <div className='flex gap-3 pt-3 border-t border-gray-700'>
          <Link
            href={project.href}
            target='_blank'
            rel='noopener noreferrer'
            className='flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-sunset_orange text-white hover:bg-sunset_orange/80 transition-colors'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
            Live Site
          </Link>
          {project.github && (
            <Link
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-600 text-wild_sand hover:border-sunset_orange hover:text-sunset_orange transition-colors'
            >
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
              GitHub
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <div className='container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24'>
      <section className='w-full text-center md:text-left'>
        <h2 id='work' className='secondary-title'>
          My Web Developer Portfolio
        </h2>
        <p className='section-paragraph'>
          Please enjoy a curated collection of my great clients
          <span className='text-sunset_orange'>.</span>
        </p>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Work;
