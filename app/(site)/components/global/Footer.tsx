// import Link from "next/link";
// import { FaJedi } from "react-icons/fa6";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* <Link href="#hero">
        <div className="py-4 sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center">
            <FaJedi className="w-10 h-10 text-[rgb(245,245,245)] hover:text-[rgb(255,83,61)]" />
          </div>
        </div>
      </Link> */}
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400 border-t-2 border-[#ab987a]/70">
        <small className=" duration-200 font-mono">
          <Link href="/">
            <span className="text-[#f5f5f5]">evanmarshall</span>
            <span className="text-[#ff533d]">.</span>
            <span className="text-[#ab987a]">dev</span>
          </Link>{" "}
          | All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-[#f5f5f5] duration-200">
          <a
            href="https://github.com/evanmarshall-dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made with love by{" "}
            <span className="text-[#ff533d]">Evan Marshall</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
