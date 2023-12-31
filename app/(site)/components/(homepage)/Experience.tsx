// import { motion } from "framer-motion";
import ExperienceCard from "../ExperienceCard";

export default function Experience() {
  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        My Work Experience
      </h3>
      <div className="flex w-full p-10 overflow-x-scroll space-x-5 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(255,83,61)]/80">
        <ExperienceCard />
      </div>
    </div>
  );
}
