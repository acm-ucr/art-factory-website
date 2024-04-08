import React from "react";
import { socials } from "@/data/socials.js";

const Socials = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-art-pink-100 text-lg font-bold ">Get Involved</p>
        <hr className="border-2 border-art-pink-100 w-12 rounded-full" />
        <div className="flex my-5 space-x-10">
          {socials.map((social, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-5xl text-art-pink-100"
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