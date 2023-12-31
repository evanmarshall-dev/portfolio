import Image from "next/image";

import { getProfile } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function About() {
  const profile = await getProfile();

  return (
    <div>
      {profile &&
        profile.map(profile => (
          <div
            key={profile._id}
            className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
          >
            <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
              About Yours Truly
            </h3>
            {profile.profileImage && (
              <Image
                src={profile.profileImage?.image}
                alt={profile.profileImage?.alt}
                width={600}
                height={500}
                className="flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-95 md:h-64 xl:w-[600px] xl:h-[500px]"
              />
            )}
            <div className="px-0 space-y-10 md:px-10">
              <h4 className="text-4xl font-semibold">
                Here is a{" "}
                <span className="text-[1.3rem] underline decoration-[#ff533d]">
                  little
                </span>{" "}
                background
              </h4>
              <div className="text-base">
                <PortableText value={profile.fullBio} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
