"use client";
import { useInView } from "motion/react";
import React, { useRef } from "react";
import { FaStarOfLife } from "react-icons/fa6";

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      className="w-full min-h-screen flex items-center pt-16 max-md:pt-0 justify-center flex-col px-10 text-center gap-10 pb-10"
      id="pricing"
    >
      <h2
        className={`text-5xl text-gradient max-md:text-4xl ${
          inView ? "motion-preset-expand motion-delay-500" : ""
        }`}
        ref={ref}
      >
        Get the best at reasonable price
      </h2>

      <div
        className={`size-full flex flex-wrap gap-10 items-center justify-center min-h-96 ${
          inView ? "motion-preset-expand motion-delay-700" : ""
        }`}
      >
        <div className="w-80 h-[28rem] rounded-xl bg-[#1e1e1e] p-2 flex flex-col gap-4 relative overflow-hidden">
          <div className="size-[50rem] absolute bg-shadow bg-no-repeat pointer-events-none -left-60 -top-40 z-[100]" />

          <div className="w-full h-40 rounded-lg bg-black flex items-start flex-col p-4 gap-2">
            <p className="text-lg">Starter plan</p>
            <p className="text-3xl font-semibold">
              $100<span className="text-xs text-[#b7b7b7]">/month</span>
            </p>
            <p className="text-xs text-start text-[#b7b7b7]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              maxime!
            </p>
          </div>
          <div className="size-full flex flex-col gap-2 max-sm:text-xs">
            <div className="flex gap-2 max-sm:gap-4 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Up to 5 users.</p>
            </div>
            <div className="flex gap-2 max-sm:gap-4 items-center justify-start">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>10 GB storage.</p>
            </div>
            <div className="flex gap-2 max-sm:gap-4 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Basic analytics and reporting.</p>
            </div>
            <div className="flex gap-2 max-sm:gap-4 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Community access.</p>
            </div>
            <div className="flex gap-2 max-sm:gap-4 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>API with basic rate limits.</p>
            </div>
            <div className="flex gap-2 max-sm:gap-4 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Mobile and web access.</p>
            </div>
          </div>
        </div>
        <div className="w-80 h-[28rem] rounded-xl bg-[#1e1e1e] p-2 flex flex-col gap-4 relative overflow-hidden">
          <div className="size-[50rem] absolute bg-shadow bg-no-repeat pointer-events-none -left-60 -top-40 z-[100]" />
          <div className="w-full h-40 rounded-lg bg-black flex items-start flex-col p-4 gap-2">
            <p className="text-lg">Starter plan</p>
            <p className="text-3xl font-semibold">
              $100<span className="text-xs text-[#b7b7b7]">/month</span>
            </p>
            <p className="text-xs text-start text-[#b7b7b7]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              maxime!
            </p>
          </div>
          <div className="size-full flex flex-col gap-2 max-sm:text-xs">
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Up to 5 users.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>10 GB storage.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Basic analytics and reporting.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Community access.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>API with basic rate limits.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Mobile and web access.</p>
            </div>
          </div>
        </div>
        <div className="w-80 h-[28rem] rounded-xl bg-[#1e1e1e] p-2 flex flex-col gap-4 relative overflow-hidden">
          <div className="size-[50rem] absolute bg-shadow bg-no-repeat pointer-events-none -left-60 -top-40 z-[100]" />

          <div className="w-full h-40 rounded-lg bg-black flex items-start flex-col p-4 gap-2">
            <p className="text-lg">Starter plan</p>
            <p className="text-3xl font-semibold">
              $100<span className="text-xs text-[#b7b7b7]">/month</span>
            </p>
            <p className="text-xs text-start text-[#b7b7b7]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
              maxime!
            </p>
          </div>
          <div className="size-full flex flex-col gap-2 max-sm:text-xs">
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Up to 5 users.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>10 GB storage.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Basic analytics and reporting.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Community access.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>API with basic rate limits.</p>
            </div>
            <div className="flex gap-2 items-center justify-start ">
              <span className="p-1 rounded-full border bg-black">
                <FaStarOfLife size={12} />
              </span>
              <p>Mobile and web access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
