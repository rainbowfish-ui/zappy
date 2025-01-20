import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-start flex-col px-40">
      <div className="size-full pt-28 rounded-lg flex items-center justify-center flex-col gap-4">
        <h4 className="uppercase tracking-[0.4rem]">Testimonial</h4>
        <h6 className="text-center text-6xl font-semibold text-gradient">
          What our clients think <br /> about us
        </h6>
      </div>
      <div className="size-full flex items-center justify-center min-h-96 text-[#c9c9c9]">
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
