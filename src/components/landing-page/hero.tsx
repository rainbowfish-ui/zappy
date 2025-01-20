import Image from "next/image";
import React from "react";
import { PiStarFourBold } from "react-icons/pi";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen text-center flex-col flex items-center justify-center relative overflow-hidden gap-8 -top-12"
      id="home"
    >
      <div className="bg-violet-500 px-4 py-1 rounded-full flex items-center justify-center gap-1 text-sm motion-preset-shake motion-delay-300">
        <PiStarFourBold size={18} />
        <p>New version 2.0 released</p>
      </div>
      <h2 className="text-gradient w-[80%] font-semibold text-6xl text-gradient motion-preset-pop">
        The easiest way to solve your problems
      </h2>
      <p className="text-sm text-[#9e9e9e] motion-preset-expand">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, illo!
      </p>
      <div className="flex items-center justify-center gap-4 border-[#b8b8b8] border rounded-full motion-preset-expand">
        <input
          className="bg-transparent outline-none rounded-full px-4 py-2"
          placeholder="Enter you email"
        />
        <button className="px-4 py-2 bg-white rounded-full text-black font-semibold active:scale-95 transition-all">
          Access Beta
        </button>
      </div>
      <div className="flex-col flex gap-4 items-center justify-center">
        <p>Backed by</p>
        <div className="flex items-center justify-normal gap-4">
          <Image
            src="ycombinator-logo.png"
            alt="ycombinator"
            width={1}
            height={1}
            className="size-8 rounded-md"
          />
          <Image
            src="x-logo.jpg"
            alt="x"
            width={1}
            height={1}
            className="size-8 rounded-md border"
          />
          <Image
            src="openai-logo.svg"
            alt="openai"
            width={1}
            height={1}
            className="size-8 rounded-md bg-white p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
