import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="size-full min-h-96 lg:px-40 max-md:px-0 border-t border-[#1f1f1f] overflow-hidden"
      id="footer"
    >
      <div className="size-full h-96 border-l border-r border-[#1f1f1f]">
        <div className="h-16 w-full border-b border-[#1f1f1f] flex items-center justify-between max-md:hidden">
          <Link href="#footer" className="size-full border-r border-[#1f1f1f]">
            <span className="size-full flex items-center justify-between px-10">
              Twitter <BsArrowRight />
            </span>
          </Link>
          <Link href="#footer" className="size-full border-r border-[#1f1f1f]">
            <span className="size-full flex items-center justify-between px-10">
              Youtube <BsArrowRight />
            </span>
          </Link>
          <Link href="#footer" className="size-full border-r border-[#1f1f1f]">
            <span className="size-full flex items-center justify-between px-10">
              Linkedin <BsArrowRight />
            </span>
          </Link>
          <Link href="#footer" className="size-full">
            <span className="size-full flex items-center justify-between px-10">
              Facebook <BsArrowRight />
            </span>
          </Link>
        </div>

        <div className="size-full md:hidden overflow-hidden relative flex items-center justify-center max-lg:px-20 flex-col max-sm:px-2">
          <p className="uppercase text-6xl tracking-[1rem] pt-10 text-gradient">
            ZAPPY
          </p>
          <div className="size-[40rem] left-0 -top-32 absolute bg-shadow bg-no-repeat pointer-events-none -rotate-45" />
          <div className="flex items-center justify-between size-full">
            <div className="text-[#e4e4e4] flex flex-col gap-2">
              <p>Contact</p>
              <p>FAQ</p>
              <p>Career</p>
              <p>Pricing</p>
            </div>
            <div className="text-[#e4e4e4] flex flex-col gap-2">
              <p>Help</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
            <div className="text-[#e4e4e4] flex flex-col gap-2">
              <p>Forum</p>
              <p>Events</p>
              <p>Partners</p>
              <p>Affiliates</p>
            </div>
            <div className="text-[#e4e4e4] flex flex-col gap-2">
              <p>Investors</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Legal</p>
            </div>
          </div>
        </div>

        <div className="size-full border-b border-[#1f1f1f] flex items-center justify-between relative max-md:hidden">
          <div className="size-[70rem] absolute bg-shadow bg-no-repeat pointer-events-none -rotate-45" />
          <div className="size-full border-r border-[#1f1f1f] flex flex-col gap-8 pt-10  overflow-hidden items-center">
            <p className="text-base text-[#a1a1a1]">About us</p>
            <div className="text-[#e4e4e4] flex flex-col gap-2">
              <p>Contact</p>
              <p>FAQ</p>
              <p>Blog</p>
              <p>Career</p>
              <p>Pricing</p>
            </div>
          </div>
          <div className="size-full border-r border-[#1f1f1f] flex flex-col gap-8 pt-10  overflow-hidden items-center">
            <p className="text-base text-[#a1a1a1]">Support </p>
            <div className="text-[#e4e4e4] flex flex-col gap-2">
              <p>Help</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
          </div>
          <div className="size-full border-r border-[#1f1f1f] flex flex-col gap-8 pt-10  overflow-hidden items-center ">
            <p className="text-base text-[#a1a1a1]">Community</p>
            <div className="text-[#e4e4e4] flex flex-col gap-2">
              <p>Forum</p>
              <p>Events</p>
              <p>Partners</p>
              <p>Affiliates</p>
            </div>
          </div>
          <div className="size-full flex flex-col gap-8 pt-10 overflow-hidden items-center">
            <p className="text-base text-[#a1a1a1]">Press</p>
            <div className="text-[#e4e4e4] flex flex-col gap-2">
              <p>Investors</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Legal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
