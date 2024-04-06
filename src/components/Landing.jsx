import React from "react";
import { socials } from "@/data/socials.js";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-art-pink-100 text-lg font-bold ">Get Involved</p>
      <hr className="border-2 border-art-pink-100 w-12 rounded-full" />
      <div className="flex py-5 space-x-10">
        {socials.map((social, index) => (
          <div className={`flex flex-col items-center`} key={index}>
            <text className={`${social.color} ${social.pyNumb}`}>
              {social.icon}
            </text>
            <p className={`${social.color} text-sm font-bold`}>{social.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
