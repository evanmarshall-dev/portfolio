import Image from "next/image";
import bg from "@/public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";

export const metadata = {
  title: {
    template: "%s | evanmarshall.dev",
    default: "About",
  },
  description: "Description",
};

export default function About() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-8xl text-accent">evanmarshall.dev</h1>
          <p className="font-light text-foreground text-lg">
            About the wizard behind the website magic.
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
