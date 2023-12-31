import About from "./components/(homepage)/About";
import Contact from "./components/(homepage)/Contact";
import Experience from "./components/(homepage)/Experience";
import Hero from "./components/(homepage)/Hero";
import Projects from "./components/(homepage)/Projects";
import Skills from "./components/(homepage)/Skills";

export default function Home() {
  return (
    <main className="z-0 h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(255,83,61)]/80">
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
    </main>
  );
}
