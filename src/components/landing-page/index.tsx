import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Services from "./services";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative flex-col">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default LandingPage;
