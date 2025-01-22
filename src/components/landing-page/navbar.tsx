import Link from "next/link";
import React from "react";
import { PiStarFourBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-full h-14 flex items-center justify-center lg:px-32 md:px-20 sticky left-0 top-4 z-50">
      <div className="bg-[#262626] size-full flex items-center justify-between px-10 rounded-full">
        <Link href="/" className="flex items-center justify-start gap-2">
          <PiStarFourBold size={26} />
          <h1 className="text-lg font-semibold">Zappy</h1>
        </Link>
        <div className="flex w-fit items-center justify-between lg:gap-10 max-md:hidden md:gap-2">
          <Link href="#home" className="text-[#c8c7c7] hover:text-white">
            Home
          </Link>
          <Link href="#services" className="text-[#c8c7c7] hover:text-white">
            Services
          </Link>
          <Link
            href="#testimonials"
            className="text-[#c8c7c7] hover:text-white"
          >
            Testimonials
          </Link>
          <Link href="#pricing" className="text-[#c8c7c7] hover:text-white">
            Pricing
          </Link>
          <Link href="#footer" className="text-[#c8c7c7] hover:text-white">
            Links
          </Link>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-white px-4 py-1 rounded-full text-black"
        >
          <h1 className="text-base font-semibold text-nowrap">Get Started</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
