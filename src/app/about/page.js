import About from "@/components/about/About";
import AboutLanding from "@/components/about/AboutLanding";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <AboutLanding />
      <About />
    </div>
  );
};

export default page;
