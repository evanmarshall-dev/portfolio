"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "../BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hi friends! it's me, Evan Marshall",
      "Welcome to my portfolio website!",
      "I'm your web developer <GURU />",
      "I'm your web design <ARTIST />",
      "and all round <COOL /> guy!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='flex flex-col items-center justify-center h-screen overflow-hidden text-center space-y-8'>
      <BackgroundCircles />
      <Image
        width={128}
        height={128}
        className='relative object-cover mx-auto rounded-full'
        src='/evan-marshall-profile.png'
        alt='AI generated portrait of Evan Marshall'
        priority
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
          Web Developer
        </h2>
        <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='rgb(255,83,61)' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            {" "}
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
