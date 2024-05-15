import React from "react";
import { socials } from "@/data/socials.js";
import Title from "../Title";
const Socials = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title text="Get Involved" />
      <div className=" gap-4 sm:gap-16 md:gap-24 lg:gap-32 mx-auto flex justify-between ">
        {socials.map((social, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-4xl sm:text-5xl lg:text-7xl text-art-pink-100 hover:text-art-purple-100"
          >
            {social.icon}
            <p className="text-sm sm:text-base font-bold">{social.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Socials;
