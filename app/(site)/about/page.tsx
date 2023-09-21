"use client";

import { motion } from "framer-motion";

// import { getProfile } from "@/sanity/sanity-utils";

export default function about() {
  // const profile = await getProfile();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        About Yours Truly
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/evan-marshall-family.jpg"
        className="flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-95 md:h-64 xl:w-[600px] xl:h-[500px]"
      />
      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="text-[1.3rem] underline decoration-[#ff533d]">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quidem nobis adipisci explicabo enim. Porro sit, ratione quo vel
          incidunt beatae molestiae neque aspernatur at magni, alias
          accusantium. Culpa, unde. Eligendi nostrum repudiandae ipsam
          cupiditate voluptates aut accusantium impedit at corporis fuga officia
          harum excepturi, dolor officiis culpa quam odio delectus sed vel
          nesciunt quo exercitationem! Ipsum enim et temporibus? Commodi, iusto.
          Voluptatem voluptates optio error tempore. Nostrum expedita nesciunt
          libero nisi reiciendis maxime explicabo dignissimos ab ratione?
          Impedit amet optio nam iste labore neque numquam tempore quaerat
          dolorum totam!
        </p>
      </div>
    </motion.div>
  );
}
