import Link from "next/link";
import { FaEye } from "react-icons/fa6";

function Hero() {
  const style = { fontSize: "140%" };

  return (
    <section className="w-full px-8 mx-auto mt-16 items-center md:items-left md:px-14 lg:px-24">
      <nav className="fixed hidden lg:mr-24 lg:w-4 left-percentage xl:block">
        <div className="absolute space-y-6 transform -translate-x-1/2 left-50 mt-36">
          <Link
            href="/"
            className="nav-dot block rounded-full w-7 h-7 transition-all border-4 hover:border-sunset_orange hover:bg-sunset_orange active:border-sunset_orange active:bg-sunset_orange focus:border-sunset_orange focus:bg-sunset_orange"
          >
            <span className="px-2 py-1 ml-10 rounded-md opacity-0 bg-ebony dark:bg-wild_sand text-wild_sand dark:text-ebony">
              Home
            </span>
          </Link>
          <Link
            href="#work"
            className="nav-dot block rounded-full w-7 h-7 transition-all border-4 hover:border-sunset_orange hover:bg-sunset_orange active:border-sunset_orange active:bg-sunset_orange focus:border-sunset_orange focus:bg-sunset_orange"
          >
            <span className="px-2 py-1 ml-10 rounded-md opacity-0 bg-ebony dark:bg-wild_sand text-wild_sand dark:text-ebony">
              Work
            </span>
          </Link>
          <Link
            href="#hire"
            className="nav-dot block rounded-full w-7 h-7 transition-all border-4 hover:border-sunset_orange hover:bg-sunset_orange active:border-sunset_orange active:bg-sunset_orange focus:border-sunset_orange focus:bg-sunset_orange"
          >
            <span className="px-2 py-1 ml-10 rounded-md opacity-0 bg-ebony dark:bg-wild_sand text-wild_sand dark:text-ebony">
              Hire
            </span>
          </Link>
        </div>
      </nav>
      <div className="flex flex-wrap mt-0 lg:ml-20 md:my-36">
        <div className="w-full md:w-3/4">
          <h1 className="text-4xl font-bold text-center md:text-6xl lg:text-7xl md:text-left font-sans">
            I create <br /> <span className="italic">beautiful</span> online
            experiences for your <span className="italic">business</span>
            <span className="text-sunset_orange">.</span>
          </h1>
          <Link
            href="#work"
            className="flex justify-center w-full px-8 py-4 mt-12 space-x-3 font-bold border rounded md:w-1/3 border-sandrift text-wild_sand bg-sandrift hover:bg-ebony hover:border"
          >
            <FaEye style={style} />
            <span>View my work.</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
