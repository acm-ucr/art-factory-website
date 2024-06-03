import React from "react";
import Image from "next/image";
import paintbrush from "@/public/paint.svg";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-art-purple-100 p-4 md:p-6 w-full">
      <div className="flex items-center gap-3">
        <Image src={paintbrush} alt="brush icon" className="scale-75" />
        <div className="text-white font-nunito text-xl md:text-3xl font-semibold">
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
