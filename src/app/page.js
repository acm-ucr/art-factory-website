import React from "react";
import Button from "@/components/Button.jsx";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Home</p>
      <Button text="LEARN MORE" link="/about" />
    </div>
  );
};

export default Home;
