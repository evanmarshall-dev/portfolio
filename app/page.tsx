import Hero from "./hero/page";
import About from "./about/page";
import WorkExperience from "./experience/page";
import Skills from "./skills/page";
import Projects from "./work/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="z-0 h-screen overflow-scroll snap-y snap-mandatory scroll-smooth">
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
    </div>
  );
}
