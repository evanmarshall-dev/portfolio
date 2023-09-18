"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const nav = (props: Props) => {
  return (
    <nav className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/evanmarshall-dev"
          fgColor="currentColor"
          bgColor="transparent"
          target="_blank"
          className="hover:text-[#ab987a] text-[#ab987a]/60"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/evan-marshall-dev/"
          fgColor="currentColor"
          bgColor="transparent"
          target="_blank"
          className="hover:text-[#ab987a] text-[#ab987a]/60"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-[#ab987a] cursor-pointer"
        >
          <SocialIcon
            network="email"
            fgColor="currentColor"
            bgColor="transparent"
            target="_blank"
            className="hover:text-[#ab987a] text-[#ab987a]/60 cursor-pointer"
          />
          <p className="hidden text-sm text-[#ab987a]/60 hover:text-[#ab987a] uppercase md:inline-flex">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </nav>
  );
};

export default nav;
