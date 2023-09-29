export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio: Evan Marshall | Web Developer",
  description:
    "Bio: Web developer crafting business websites. Expert in branding design, consultation, and monthly maintenance. Optimize your online presence. Explore my portfolio or 📞 📧 me for a free consultation.",
};

export default async function Bio() {
  return (
    <main className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h1 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        A Little About Me
      </h1>
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi
        temporibus maiores. Aut unde assumenda deleniti rerum? Est commodi
        maiores earum, modi, tempore aspernatur voluptatibus quis voluptatum
        illo nisi doloribus.
      </p>
    </main>
  );
}
