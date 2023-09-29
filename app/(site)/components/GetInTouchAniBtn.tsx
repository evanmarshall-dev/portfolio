"use client";

import { FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function GetInTouchAniBtn() {
  return (
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
  );
}
