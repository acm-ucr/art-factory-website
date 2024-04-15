import React from "react";
// import Image from "@/public/logo.svg";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <FaDiscord /> <FaInstagram /> <IoMailOutline /> <RiTiktokLine />
      <div className="flex justify-between bg-art-purple p-5">
        <div className="flex gap-3">
          <p>logo</p>
          <p>Art Factory</p>
        </div>
        <div>icons</div>
      </div>
    </div>
  );
};

export default Footer;
