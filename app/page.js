import Contact from "@/app/ui/contact/Contact";
import Hero from "@/app/ui/Hero";
import Work from "@/app/ui/Work";

export default function Home() {
  return (
    <main className="pb-12">
      <Hero />
      <Work />
      <Contact />
    </main>
  );
}
