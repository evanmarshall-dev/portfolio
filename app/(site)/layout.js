import "@/app/globals.css";
import { noto_sans_mono } from "@/ui/fonts";
// import Footer from "@/ui/Footer";
// import Header from "@/ui/Header";
import ToTopBtn from "@/ui/ToTopBtn";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: {
    template: "evanmarshall.dev | %s",
    default: "evanmarshall.dev",
  },
  description:
    "Contact me today to discuss how I can get your business online and working for you.",
  keywords: ["Web Developer", "Website Developer", "Nova Scotia", "Web Design"],
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
      "Contact me today to discuss how I can get your business online and working for you.",
    url: "https://www.evanmarshall.dev",
    siteName: "evanmarshall.dev",
    images: [
      {
        url: "https://www.evanmarshall.dev/image-name-here.jpg",
        width: 425,
        height: 425,
        alt: "ALT description here.",
      },
      {
        url: "https://www.evanmarshall.dev/landscape-image-name-here.jpg",
        width: 600,
        height: 400,
        alt: "ALT description here.",
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
      "Contact me today to discuss how I can get your business online and working for you.",
    images: ["https://www.evanmarshall.dev/image-name-here.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans_mono.variable} font-mono max-w-7xl antialiased min-h-screen text-center mx-auto scroll-smooth py-8 text-ebony bg-wild_sand`}
      >
        <main>
          <header>{/* <Header /> */}</header>
          {children}
          {/* <Analytics /> */}
          {/* <SpeedInsights /> */}
          <ToTopBtn />
          <footer>{/* <Footer /> */}</footer>
        </main>
      </body>
    </html>
  );
}
