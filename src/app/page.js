import React from "react";
import Socials from "@/components/Socials";
import AboutSection from "@/components/AboutSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <AboutSection />
      <Socials />
    </div>
  );
};

export default Home;
