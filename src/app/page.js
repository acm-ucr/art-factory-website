import React from "react";
import Button from "@/components/Button";
import Socials from "@/components/Socials";
import Landing from "@/components/Landing";
import ProjectTypes from "@/components/ProjectTypes";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Home</p>
      <Button text="LEARN MORE" link="/about" />
      <Socials />
      <Landing />
      <ProjectTypes />
    </div>
  );
};

export default Home;
