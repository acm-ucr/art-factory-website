import React from "react";
import Image from "next/image";
import paintbrush from "@/public/paint.svg";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-art-purple-100 p-2 md:p-4 w-full">
      <div className="flex items-center gap-2 md:gap-3">
        <Image src={paintbrush} alt="brush icon" className="scale-90" />
        <div className="hidden md:block text-white font-nunito text-3xl md:text-3xl">
          Art Factory
        </div>
        <div className="block md:hidden text-white font-nunito text-3xl md:text-3xl">
          Art
          <p>Factory</p>
        </div>
      </div>
      <div className="flex gap-4 md:gap-10 text-4xl items-center mr-4">
        <FaDiscord className=" text-white hover:scale-110" />
        <FaInstagram className=" text-white hover:scale-110" />
        <IoMailOutline className=" text-white hover:scale-110" />
        {/* <RiTiktokLine className="text-4xl text-white hover:scale-110" /> */}
      </div>
    </div>
  );
};

export default Footer;
