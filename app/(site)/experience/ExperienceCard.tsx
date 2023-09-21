// import { motion } from "framer-motion";
import Image from "next/image";

import { getExperiences } from "@/sanity/sanity-utils";

export default async function ExperienceCard() {
  const experience = await getExperiences();

  return (
    <div>
      {experience.map(experience => (
        <article
          key={experience._id}
          className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          {experience.logo && (
            <Image
              // initial={{ y: -100, opacity: 0 }}
              // transition={{ duration: 1.2 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
              src={experience.logo}
              alt={experience.company}
              width={100}
              height={100}
            />
          )}

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{experience.title}</h4>
            <p className="mt-1 text-2xl font-bold">{experience.company}</p>
            <div className="flex my-2 space-x-2">
              {/* TODO: Fix this with next/image and dynamically with sanity.io */}
              {/* <img className="w-10 h-10 rounded-full" src="#" alt="" /> */}
              {/* Tech used */}
              {/* Tech used */}
              {/* Tech used */}
            </div>
            <p className="py-5 text-gray-300 uppercase">
              {new Date(experience.startDate).toDateString()} -{" "}
              {experience.currentJob
                ? "Current"
                : new Date(experience.endDate).toDateString()}
            </p>
            <ul className="ml-5 space-y-4 text-lg pr-5 list-disc max-h-40 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[rgb(255,83,61)]/80">
              {experience.points.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
