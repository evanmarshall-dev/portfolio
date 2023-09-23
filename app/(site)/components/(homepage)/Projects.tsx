// On previous versions of NextJS you would export a function for get static props and if you has multiple routes on the page you would have to do function for get static paths. This would make it so that stuff that is server side would be loaded on client.
// Now with NextJS 13 you can simply change the above function into an async await and pass in getProjects().
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Projects() {
  // Because we defined the promise within sanity-utils.ts we can define types everywhere we call on getProjects function.
  const projects = await getProjects();

  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Some of my Work
      </h3>
      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(255,83,61)]/80">
        {projects.map(project => (
          <div
            key={project._id}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44"
          >
            {project.image && (
              <Image
                // initial={{ y: -300, opacity: 0 }}
                // transition={{ duration: 1.2 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                src={project.image}
                alt={project.name}
                width={100}
                height={100}
              />
            )}

            <div className="max-w-6xl px-0 space-y-10 md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[rgb(255,83,61)]">
                  Case Study {project._id + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>
              <a
                href={project.url}
                title="View Project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f1626] rounded-lg text-[#f5f5f5] font-bold py-3 px-4 whitespace-nowrap"
              >
                View Project
              </a>
              {/* Instead of looping over project.content we will use a react package called PortableText. */}
              <div className="text-lg text-center md:text-left">
                <PortableText value={project.content} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#ab987a]/60 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
