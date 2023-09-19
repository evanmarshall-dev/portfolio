import Link from "next/link";
import Hero from "./hero/page";
import About from "./about/page";
import WorkExperience from "./experience/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { FaJedi } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="z-0 h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(255,83,61)]/80">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center">
            <FaJedi className="w-10 h-10 text-[rgb(245,245,245)] hover:text-[rgb(255,83,61)]" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
