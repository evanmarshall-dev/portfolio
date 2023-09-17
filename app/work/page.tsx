"use client";

import { motion } from "framer-motion";

type Props = {};

const work = (props: Props) => {
  // Change numbers in array to add more projects. Currently, there are 5 projects.
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Some of my Work
      </h3>
      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(255,83,61)]/80">
        {/* Map through the above projects array and for the title of each project set to the value of i, starting at 1. */}
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/elysian-logo.png"
              alt=""
            />
            <div className="max-w-6xl px-0 space-y-10 md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[rgb(255,83,61)]">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Project Name
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi voluptas impedit dolor, molestias quia a laborum
                deleniti distinctio nostrum sint doloremque, dignissimos totam
                inventore iure, commodi ab! Repellat, error voluptatem.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#ab987a]/60 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default work;
