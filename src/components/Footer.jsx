import React from "react";
import Image from "next/image";
import paintbrush from "@/public/paint.svg";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-art-purple-100 p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-center gap-3 mb-4 md:mb-0">
        <Image src={paintbrush} alt="brush icon" className="scale-75" />
        <div className="text-white font-nunito text-xl md:text-3xl font-semibold mt-2 md:mt-0">
          Art Factory
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <FaDiscord className="text-2xl md:text-4xl text-white" />
        <FaInstagram className="text-2xl md:text-4xl text-white" />
        <IoMailOutline className="text-2xl md:text-4xl text-white" />
      </div>
    </div>
  );
};

export default Footer;
