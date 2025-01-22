"use client";
import { useInView } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

const Testimonial = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      className="min-h-screen w-full flex items-center justify-start flex-col px-40"
      id="testimonials"
    >
      <div className="size-full pt-28 rounded-lg flex items-center justify-center flex-col gap-4">
        <h4 className="uppercase tracking-[0.4rem]">Testimonials</h4>
        <h6
          className={`text-center text-6xl font-semibold text-gradient ${
            inView ? "motion-preset-pop motion-delay-500" : ""
          }`}
          ref={ref}
        >
          What our clients think <br /> about us
        </h6>
      </div>
      <div className="size-full flex items-center justify-center min-h-96 text-[#c9c9c9] relative">
        <div className="size-full absolute flex items-center justify-between">
          <div className="size-full">
            <div className="size-20 rounded-full bg-[#424242] overflow-hidden p-1 hover:scale-105 transition-all">
              <Image
                src="/elon.jpg"
                alt="elon musk"
                width={1}
                height={1}
                className="size-full object-cover rounded-full"
              />
            </div>
            <div className="size-16 ml-20 mt-20 rounded-full bg-[#424242] overflow-hidden p-1">
              <Image
                src="/elon.jpg"
                alt="elon musk"
                width={1}
                height={1}
                className="size-full object-cover rounded-full"
              />
            </div>
            <div className="size-14 ml-40 mt-10 rounded-full bg-[#424242] overflow-hidden p-1">
              <Image
                src="/elon.jpg"
                alt="elon musk"
                width={1}
                height={1}
                className="size-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="size-full flex items-end flex-col ">
            <div className="size-20 rounded-full bg-[#424242] overflow-hidden p-1">
              <Image
                src="/elon.jpg"
                alt="elon musk"
                width={1}
                height={1}
                className="size-full object-cover rounded-full"
              />
            </div>
            <div className="size-16 mr-20 mt-20 rounded-full bg-[#424242] overflow-hidden p-1">
              <Image
                src="/elon.jpg"
                alt="elon musk"
                width={1}
                height={1}
                className="size-full object-cover rounded-full"
              />
            </div>
            <div className="size-14 mr-40 mt-10 rounded-full bg-[#424242] overflow-hidden p-1">
              <Image
                src="/elon.jpg"
                alt="elon musk"
                width={1}
                height={1}
                className="size-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="size-24 rounded-full bg-[#424242] overflow-hidden p-1">
            <Image
              src="/elon.jpg"
              alt="elon musk"
              width={1}
              height={1}
              className="size-full object-cover rounded-full"
            />
          </div>
          <p className="text-xs text-center">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Error rerum autem sed maiores vero eum?"
          </p>
          <p className="text-end text-xs">- Elon Musk (CEO @starfish)</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
