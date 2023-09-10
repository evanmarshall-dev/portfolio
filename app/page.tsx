import Hero from "./hero/page";

export default function Home() {
  return (
    <div className="z-0 h-screen overflow-scroll snap-y snap-mandatory">
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}
