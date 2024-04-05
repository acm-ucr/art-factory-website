import React from "react";
import Button from "@/components/Button.jsx";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Home</p>
      <Button text="Click Me" link="/your-link" target="_self" />{" "}
      {/* Add the Button component */}
    </div>
  );
};

export default Home;
