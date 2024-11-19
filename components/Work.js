import Image from "next/image";
import Link from "next/link";
import glooscapPic from "@/public/images/glooscap_thumb.png";
import hearmstrongPic from "@/public/images/hearmstrong_thumb.png";
import quarterdeckPic from "@/public/images/quarterdeck_thumb.png";
import hockleyDentistryPic from "@/public/images/hockley-dentistry_thumb.png";
import gatesInsurancePic from "@/public/images/gatesinsurance_thumb.png";
import TripleETechPic from "@/public/images/tripleetech_thumb.png";
import kentfieldsPic from "@/public/images/kentfields_thumb.png";
import safeguardPic from "@/public/images/safeguard_thumb.png";
import steppingStonePic from "@/public/images/stepping-stone_thumb.png";
import eliteAutoPic from "@/public/images/elite-auto_thumb.png";
import acadiaRefrigePic from "@/public/images/acadia-refrige_thumb.png";

const projects = [
  {
    href: "https://glooscapfirstnation.com/",
    src: glooscapPic,
  },
  {
    href: "https://www.hearmstrong.com/",
    src: hearmstrongPic,
  },
  {
    href: "https://www.quarterdeck.ca/",
    src: quarterdeckPic,
  },
  {
    href: "https://hockleyfamilydentistry.ca/",
    src: hockleyDentistryPic,
  },
  {
    href: "https://gatesinsurance.ca/",
    src: gatesInsurancePic,
  },
  {
    href: "https://tripleetech.ca/",
    src: TripleETechPic,
  },
  {
    href: "https://kentfields.ca/",
    src: kentfieldsPic,
  },
  {
    href: "https://safeguardservices.ca/",
    src: safeguardPic,
  },
  {
    href: "https://steppingstonepreschool.ca/",
    src: steppingStonePic,
  },
  {
    href: "https://www.eliteautoandglass.ca/",
    src: eliteAutoPic,
  },
  {
    href: "https://acadiarefrigeration.com/",
    src: acadiaRefrigePic,
  },
];

function Work() {
  return (
    <div className="container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24">
      <section className="w-full text-center md:text-left">
        <h2 id="work" className="secondary-title">
          My work
        </h2>
        <p className="section-paragraph">
          Please enjoy a curated collection of my great clients
          <span className="text-sunset_orange">.</span>
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const domain = new URL(project.href).hostname;

            return (
              <Link key={index} href={project.href} target="_blank">
                <Image
                  src={project.src}
                  alt={`Thumbnail of ${domain} website`}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Work;
