import Hero from "./hero/page";
import About from "./about/page";
import WorkExperience from "./experience/page";

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
    </div>
  );
}
