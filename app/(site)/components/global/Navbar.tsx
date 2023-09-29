import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import GetInTouchAniBtn from "../GetInTouchAniBtn";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
      <div
        // initial={{ x: -500, opacity: 0, scale: 0.5 }}
        // animate={{ x: 0, opacity: 1, scale: 1 }}
        // transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <Link href="https://github.com/evanmarshall-dev">
          <FaGithub className="hover:text-[#ab987a] text-[#ab987a]/60 text-2xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/evan-marshall-dev/">
          <FaLinkedinIn className="hover:text-[#ab987a] text-[#ab987a]/60 text-2xl ml-4" />
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link className="ml-4" href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link className="ml-4" href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link className="ml-4" href="#projects">
          {" "}
          <button className="heroButton">Projects</button>
        </Link>
        <Link className="ml-4" href="#contact">
          <GetInTouchAniBtn />
        </Link>
      </div>
    </nav>
  );
}
