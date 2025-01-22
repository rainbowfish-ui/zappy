"use client";
import { useInView } from "motion/react";
import React, { useRef } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaOctopusDeploy, FaSackDollar } from "react-icons/fa6";
import { GiLightningBow } from "react-icons/gi";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";

const services = [
  {
    name: "Conversion-Focused",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel recusandae, distinctio ipsum aliquam maxime.",
    icon: BsGraphUpArrow,
  },
  {
    name: "Lightning-Fast",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel recusandae, distinctio ipsum aliquam maxime.",
    icon: GiLightningBow,
  },
  {
    name: "Affordable Excellence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel recusandae, distinctio ipsum aliquam maxime.",
    icon: FaSackDollar,
  },
  {
    name: "Custom design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel recusandae, distinctio ipsum aliquam maxime.",
    icon: AiOutlineAntDesign,
  },
  {
    name: "Access to top-tier",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel recusandae, distinctio ipsum aliquam maxime.",
    icon: FaOctopusDeploy,
  },
  {
    name: "Problem Solving",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel recusandae, distinctio ipsum aliquam maxime.",
    icon: HiOutlineMagnifyingGlassCircle,
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div
      className="w-full flex items-center justify-center flex-col gap-10 px-40 max-lg:px-2 min-h-screen"
      id="services"
    >
      <h2
        className={`text-5xl max-md:text-4xl text-center text-gradient font-semibold ${
          inView ? "motion-preset-pop" : ""
        }`}
        ref={ref}
      >
        Grow your business with <br /> our services
      </h2>
      <div
        className={`flex flex-wrap gap-10 items-center justify-center text-[rgb(197,197,197)] ${
          inView ? "motion-preset-pop motion-delay-300" : ""
        }`}
      >
        {services.map(({ description, icon: Icon, name }) => {
          return (
            <div
              className="w-72 h-44 dashed-border text-center flex items-center justify-center gap-4 flex-col"
              key={name}
            >
              <Icon size={30} className="text-violet-50" />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-semibold ">{name}</h4>
                <p className="text-xs text-[#7a7a7a]">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
