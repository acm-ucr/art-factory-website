import React from "react";
import Image from "next/image";
import paintbrush from "@/public/paint.svg";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-art-purple-100 p-4 md:p-6">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <Image src={paintbrush} alt="brush icon" className="scale-75" />
        <div className="text-white font-nunito text-xl md:text-3xl font-semibold">
          Art Factory
        </div>
      </div>
      <div className="flex gap-4 md:gap-10 items-center justify-center w-full md:w-auto">
        <FaDiscord className="text-2xl md:text-4xl text-white" />
        <FaInstagram className="text-2xl md:text-4xl text-white" />
        <IoMailOutline className="text-2xl md:text-4xl text-white" />
        <RiTiktokLine className="text-2xl md:text-4xl text-white" />
      </div>
    </div>
  );
};

export default Footer;
