import Header from "./header/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <main className="z-0 h-screen overflow-scroll snap-y snap-mandatory">
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </main>
  );
}
