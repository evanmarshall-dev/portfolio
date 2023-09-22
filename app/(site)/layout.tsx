import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
