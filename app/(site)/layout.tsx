// For the navbar to be SEO capable (crawling capable), it must be setup as a server component (mostly when there are multiple pages/routes).

import "../globals.css";

import Footer from "./components/global/Footer";
import type { Metadata } from "next";
import Navbar from "./components/global/Navbar";
import { Roboto } from "next/font/google";

const robo = Roboto({ weight: "400", subsets: ["latin"] });

// TODO: Issues with deploying due to adding meta data to a client component. Figure out how to do this. Maybe another Framer motion issue?
export const metadata: Metadata = {
  title: "Evan Marshall | Web Developer",
  // metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
  description:
    "Web developer crafting business websites. Expert in branding design, consultation, and monthly maintenance. Optimize your online presence. Explore my portfolio or 📞 📧 me for a free consultation.",
  // openGraph: {
  //   images:
  //     "https://docs/og.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
