import About from "@/components/about/About";
import AboutLanding from "@/components/about/AboutLanding";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <AboutLanding />
      <div className=" mt-16">
        <About />
      </div>
    </div>
  );
};

export default page;
