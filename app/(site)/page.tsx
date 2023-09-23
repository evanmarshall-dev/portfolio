import Hero from "./components/(homepage)/Hero";
import About from "./components/(homepage)/About";
import Experience from "./components/(homepage)/Experience";
import Skills from "./components/(homepage)/Skills";
import Projects from "./components/(homepage)/Projects";
import Contact from "./components/(homepage)/Contact";

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
