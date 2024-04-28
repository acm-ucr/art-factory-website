import React from "react";
import Socials from "@/components/home/Socials";
import Landing from "@/components/home/Landing";
import ProjectTypes from "@/components/home/ProjectTypes";
import AboutSection from "@/components/home/What";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Landing />
      <AboutSection />
      <ProjectTypes />
      <Socials />
    </div>
  );
};

export default Home;
