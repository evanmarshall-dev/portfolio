import "@/app/globals.css";
import { inter, roboto_mono } from "@/app/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ToTopBtn from "@/components/ToTopBtn";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    template: "evanmarshall.dev | %s",
    default: "evanmarshall.dev",
  },
  description:
    "Need help getting your business online, looking great, fast, and working for you? Contact your local web developer for a free consultation. You can reach me by email at me@evanmarshall.dev",
  keywords: [
    "web developer",
    "canada website",
    "nova scotia",
    "web designer",
    "business website",
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
    title: "evanmarshall.dev",
    description:
      "Need help getting your business online, looking great, fast, and working for you? Contact your local web developer for a free consultation. You can reach me by email at me@evanmarshall.dev",
    url: "https://www.evanmarshall.dev",
    siteName: "evanmarshall.dev",
    images: [
      // {
      //   url: "https://www.evanmarshall.dev/mobile-image.jpg",
      //   width: 425,
      //   height: 425,
      //   alt: "",
      // },
      {
        url: "https://www.evanmarshall.dev/images/evanmarshall.dev.png",
        width: 600,
        height: 400,
        alt: "",
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
    title: "evanmarshall.dev",
    description:
      "Need help getting your business online, looking great, fast, and working for you? Contact your local web developer for a free consultation. You can reach me by email at me@evanmarshall.dev",
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: ["https://www.evanmarshall.dev/images/evanmarshall.dev.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.variable} ${inter.variable} font-mono`}>
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
