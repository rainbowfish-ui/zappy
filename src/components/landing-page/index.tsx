import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Services from "./services";
import Testimonial from "./testimonial";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
    </div>
  );
};

export default LandingPage;
