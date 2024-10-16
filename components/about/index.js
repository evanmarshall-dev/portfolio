/* eslint-disable @next/next/no-img-element */

import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-2xl text-left w-full capitalize">
            Web Alchemist
          </h2>
          <p className="font-light">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            25+ <sup className="font-semibold text-base">clients</sup>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            4+{" "}
            <sup className="font-semibold text-base">years of experience</sup>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 p-0"}>
          <img
            className="w-full h-auto"
            src={
              "https://github-readme-stats.vercel.app/api/top-langs/?username=evanmarshall-dev&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            }
            alt="Evan Marshall Github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-8 p-0"}>
          <img
            className="w-full h-auto"
            src={
              "https://github-readme-stats.vercel.app/api?username=evanmarshall-dev&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            }
            alt="Evan Marshall Github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={
              "https://skillicons.dev/icons?i=js,html,css,linux,bash,bootstrap,cloudflare,docker,figma,git,github,gulp,ai,md,mongodb,mysql,nextjs,nodejs,npm,ps,pnpm,postgres,postman,react,sass,svg,tailwind,threejs,vercel,vscode,wordpress,xd,yarn"
            }
            alt="Evan Marshall Github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-6 p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=evanmarshall-dev&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="Evan Marshall Github streaks"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-6 p-0"}>
          <img
            className="w-full h-auto"
            src={
              "https://github-readme-stats.vercel.app/api/pin/?username=evanmarshall-dev&repo=portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            }
            alt="Evan Marshall Github stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
