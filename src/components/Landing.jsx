import React from "react";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-art-pink-200 text-lg font-bold ">Get Involved</p>
      <hr className="border-2 border-art-pink-200 w-12" />
      <div className="flex py-5 space-x-10">
        <div className="flex flex-col items-center">
          <FaDiscord size="48px" color="#E893C5" />
          <p className="text-art-pink-200 text-sm md:text-sm font-bold ">
            Discord
          </p>
        </div>
        <div className="flex flex-col items-center">
          <AiFillInstagram size="48px" color="#1C1DAB" />
          <p className="text-art-blue-200 text-sm font-bold ">Instagram</p>
        </div>
        <div className="flex flex-col items-center">
          <MdEmail size="48px" color="#E893C5" />
          <p className="text-art-pink-200 text-sm font-bold ">Email</p>
        </div>
        <div className="flex flex-col items-center">
          <PiTiktokLogoBold size="48px" color="#E893C5" />
          <p className="text-art-pink-200 text-sm font-bold ">TikTok</p>
        </div>
        <div className="py-4 flex flex-col items-center">
          <FaLink size="32px" color="#E893C5" />
          <p className="text-art-pink-200 text-sm font-bold ">Highlander</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
