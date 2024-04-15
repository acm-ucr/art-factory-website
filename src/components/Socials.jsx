import React from "react";
import { socials } from "@/data/socials.js";
import Title from "./Title";

const Socials = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <Title text="Get Involved" />
        <div className="flex justify-around my-5 md:container mx-auto">
          {socials.map((social, index) => (
            <div
              key={index}
              className="flex flex-col items-center object-contain text-7xl text-art-pink-100 hover:text-art-purple-100"
            >
              {social.icon}
              <p className="text-base font-bold">{social.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
