"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
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
    </header>
  );
}
