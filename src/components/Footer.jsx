import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex justify-between bg-art-purple-100 p-5">
      <div className="flex items-center gap-3 ">
        <Image src={Logo} className="h-full" />
        <div className="text-white font-nunito">Art Factory</div>{" "}
        {/* Use font-nunito class */}
      </div>
      <div className="flex gap-10 items-center">
        <FaDiscord className="text-4xl text-white" />
        <FaInstagram className="text-4xl text-white" />
        <IoMailOutline className="text-4xl text-white" />
        <RiTiktokLine className="text-4xl text-white" />
      </div>
    </div>
  );
};

export default Footer;
