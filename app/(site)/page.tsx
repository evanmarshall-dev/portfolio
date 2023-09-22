import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Image from "next/image";

import { getProfile } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const profile = await getProfile();

  return (
    <div className="z-0 h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(255,83,61)]/80">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        {profile &&
          profile.map(profile => (
            <div
              key={profile._id}
              className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
            >
              <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
                About Yours Truly
              </h3>
              {profile.profileImage && (
                <Image
                  src={profile.profileImage?.image}
                  alt={profile.profileImage?.alt}
                  width={600}
                  height={500}
                  className="flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-95 md:h-64 xl:w-[600px] xl:h-[500px]"
                />
              )}
              <div className="px-0 space-y-10 md:px-10">
                <h4 className="text-4xl font-semibold">
                  Here is a{" "}
                  <span className="text-[1.3rem] underline decoration-[#ff533d]">
                    little
                  </span>{" "}
                  background
                </h4>
                <div className="text-base">
                  <PortableText value={profile.fullBio} />
                </div>
              </div>
            </div>
          ))}
      </section>
      <section id="experience" className="snap-center">
        <Experience />
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
    </div>
  );
}
