import "@/app/ui/globals.css";
import { inter, roboto_mono } from "@/app/ui/fonts";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ToTopBtn from "@/app/ui/ToTopBtn";
import NavMenu from "@/app/ui/NavMenu";
import Footer from "@/app/ui/Footer";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Evan Marshall",
  jobTitle: "Expert Web Developer",
  url: "https://www.evanmarshall.dev",
  image: "https://www.evanmarshall.dev/images/social_portrait.png",
  email: "mailto:me@evanmarshall.dev",
  telephone: "+1-902-385-5551",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kentville",
    addressRegion: "NS",
    addressCountry: "CA",
  },
  sameAs: [
    "https://github.com/evanmarshall-dev",
    "https://www.linkedin.com/in/evan-marshall-dev",
  ],
  knowsAbout: [
    "Web Development",
    "Web Design",
    "Front-End Development",
    "Full-Stack Development",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Web Design",
    "Website Optimization",
    "E-commerce Development",
    "CMS Development (WordPress, Shopify, Squarespace, Wix)",
    "Custom Website Build and Design",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  name: "Expert Web Development Services",
  description:
    "Evan Marshall provides skilled web development services, specializing in creating beautiful, effective, and optimized online experiences. Offering custom design, development, and maintenance for business websites.",
  provider: {
    "@type": "Person",
    name: "Evan Marshall",
    url: "https://www.evanmarshall.dev",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Kentville",
    },
    {
      "@type": "Place",
      name: "Annapolis Valley",
    },
    {
      "@type": "AdministrativeArea",
      name: "Nova Scotia",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Service Offerings",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Design and Build",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Front-End Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Full-Stack Development" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Website Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CMS Development (WordPress, Shopify, Squarespace, Wix)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Optimization and Consultation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Online Website Management" },
      },
    ],
  },
  potentialAction: {
    "@type": "CommunicateAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.evanmarshall.dev/#hire",
      inLanguage: "en_CA",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform",
      ],
    },
    name: "Contact Evan Marshall for Web Development Services",
  },
};

export const metadata = {
  title: {
    template:
      "Expert Web Developer - Evan Marshall | Building Your Online Presence | %s",
    default:
      "Expert Web Developer - Evan Marshall | Building Your Online Presence",
  },
  description:
    "Evan Marshall is a skilled web developer specializing in creating beautiful and effective online experiences. Contact me for custom design, development, and maintenance for your website.",
  keywords: [
    "web developer",
    "canada website",
    "nova scotia business",
    "web designer",
    "business website",
    "kentville business",
    "halifax business",
    "canada business",
    "online web consultant",
    "web developer near me",
    "website creation",
    "online website management",
    "website optimization consultation",
    "front end developer engineer",
    "full stack developer engineer",
    "wordpress squarespace shopify wix web developer",
    "custom website build and design",
    "e-commerce website developer",
  ],
  authors: [
    { name: "Evan Marshall", url: "https://github.com/evanmarshall-dev" },
  ],
  creator: "Evan Marshall",
  metadataBase: new URL("https://www.evanmarshall.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Expert Web Developer - Evan Marshall | Building Your Online Presence",
    description:
      "Evan Marshall is a skilled web developer specializing in creating beautiful and effective online experiences. Contact me for custom design, development, and maintenance for your website.",
    url: "https://www.evanmarshall.dev",
    siteName: "evanmarshall.dev",
    images: [
      {
        url: "https://www.evanmarshall.dev/images/social_portrait.png",
        width: 630,
        height: 630,
        alt: "Freelance web developer name and website domain, evanmarshall.dev. Image for mobile screens.",
      },
      {
        url: "https://www.evanmarshall.dev/images/social_landscape.png",
        width: 1200,
        height: 630,
        alt: "Freelance web developer name and website domain, evanmarshall.dev",
      },
    ],
    locale: "en_CA",
    type: "website",
    authors: ["Evan Marshall"],
  },
  robots: {
    index: true,
    // follow: true,
    // nocache: true,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Expert Web Developer - Evan Marshall | Building Your Online Presence",
    description:
      "Evan Marshall is a skilled web developer specializing in creating beautiful and effective online experiences. Contact me for custom design, development, and maintenance for your website.",
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: ["https://www.evanmarshall.dev/images/social_landscape.png"],
  },
  other: {
    "application/ld+json_person": JSON.stringify(personSchema),
    "application/ld+json_service": JSON.stringify(serviceSchema),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-NR6RC3J5" />
      <body className={`${roboto_mono.variable} ${inter.variable} font-mono`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NR6RC3J5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NavMenu />
        {children}
        <ToTopBtn />
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
