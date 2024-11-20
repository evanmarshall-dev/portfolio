"use client";

import Link from "next/link";
import { useState } from "react";

function NavMenu() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between w-full px-8 py-6 mx-auto bg-wild_sand dark:bg-ebony md:px-14 lg:px-24">
      <Link
        href="/"
        className="inline-flex items-center text-lg font-bold tracking-wide hover:text-sandrift"
      >
        evanmarshall<span className="text-sunset_orange">.</span>
        <span className="text-sandrift">dev</span>
      </Link>
      <button
        type="button"
        className="inline-flex p-3 ml-auto text-white rounded outline-none md:hidden"
        onClick={handleClick}
      >
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-ebony dark:text-wild_sand"
        >
          <path
            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        } w-full md:inline-flex md:flex-grow md:w-auto py-5`}
      >
        <div className="flex flex-col items-center w-full md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto">
          <Link
            href="/"
            className="items-center justify-center px-6 py-2 md:inline-flex md:w-auto hover:text-sandrift"
          >
            Home
          </Link>
          <Link
            href="#work"
            className="items-center justify-center px-6 py-2 md:inline-flex md:w-auto hover:text-sandrift"
          >
            My Work
          </Link>
          <Link
            href="#hire"
            className="items-center justify-center px-6 py-2 border rounded border-sandrift bg-sandrift text-wild_sand md:inline-flex md:w-auto hover:bg-ebony hover:border"
          >
            Hire Me
          </Link>
          {/* <button className="px-6 py-2 md:inline-flex md:w-auto" type="button">
            <ThemeSwitch />
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
