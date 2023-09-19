import { getProjects } from "@/sanity/sanity-utils";

import Link from "next/link";
import Hero from "./hero/page";
import About from "./about/page";
import WorkExperience from "./experience/page";
import Skills from "./skills/page";
import Projects from "./work/page";
import Contact from "./contact/page";
import { FaJedi } from "react-icons/fa6";
import Image from "next/image";

export default async function Home() {
  // Because we defined the promise within sanity-utils.ts we can define types everywhere we call on getProjects function.
  const projects = await getProjects();

  return (
    <div className="z-0 h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(255,83,61)]/80">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* On previous versions of NextJS you would export a function for get static props and if you has multiple routes on the page you would have to do function for get static paths. This would make it so that stuff that is server side would be loaded on client. */}
      {/* Now with NextJS 13 you can simply change the above function into an async await and pass in getProjects(). */}
      <section className="snap-start">
        <div className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly">
          <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
            My Sanity Test Projects
          </h3>

          {/* We will map over all of the projects here. */}
          {projects.map(project => (
            // Add key of project id and pass in project name.
            <div
              key={project._id}
              className="border border-gray-500 rounded-lg p-3"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={250}
                  height={100}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </div>
          ))}
        </div>
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
