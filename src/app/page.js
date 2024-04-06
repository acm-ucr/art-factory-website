import React from "react";
import Button from "@/components/Button.jsx";
import Landing from "@/components/Landing.jsx";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Home</p>
      <Button text="LEARN MORE" link="/about" />
      <Landing />
    </div>
  );
};

export default Home;
