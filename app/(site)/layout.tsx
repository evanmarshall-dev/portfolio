"use client";

import "../globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

// import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

// TODO: Issues with deploying due to adding meta data to a client component. Figure out how to do this. Maybe another Framer motion issue?
// export const metadata: Metadata = {
//   title: "Evan Marshall | Web Developer",
//   description:
//     "Web developer crafting business websites. Expert in branding design, consultation, and monthly maintenance. Optimize your online presence. Explore my portfolio or 📞 📧 me for a free consultation.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get all pages (Sanity).
  // TODO: Might not work in a single page app layout. Also might not work because framer motion requires this to be a client component which does not work with async functions.
  // const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center"
          >
            <Link href="https://github.com/evanmarshall-dev">
              <FaGithub className="hover:text-[#ab987a] text-[#ab987a]/60 text-2xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/evan-marshall-dev/">
              <FaLinkedinIn className="hover:text-[#ab987a] text-[#ab987a]/60 text-2xl ml-4" />
            </Link>
          </motion.div>
          <Link href="#contact">
            <motion.div
              initial={{ x: 500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="flex flex-row items-center text-[#ab987a] cursor-pointer"
            >
              <FaEnvelope className="hover:text-[#ab987a] text-[#ab987a]/60 cursor-pointer text-2xl" />
              <p className="hidden text-sm text-[#ab987a]/60 hover:text-[#ab987a] uppercase md:inline-flex ml-4">
                Get In Touch
              </p>
            </motion.div>
          </Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
