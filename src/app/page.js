import React from "react";
import Socials from "@/components/Socials";
import Landing from "@/components/Landing";
import ProjectTypes from "@/components/ProjectTypes";
import AboutSection from "@/components/AboutSection";
import GalleryHeader from "@/components/GalleryHeader";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Landing />
      <AboutSection />
      <ProjectTypes />
      <Socials />
      <GalleryHeader text="Clay" />
    </div>
  );
};

export default Home;
