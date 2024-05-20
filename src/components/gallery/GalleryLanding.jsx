import React from "react";
import Image from "next/image";
import right from "@/public/aboutlanding/rightring.svg";
import left from "@/public/aboutlanding/leftring.svg";
import logo from "@/public/LogoLanding.svg";

const GalleryLanding = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center relative">
      <Image
        src={left}
        alt="leftring"
        className="absolute -left-[9%] top-[67%] w-64 rotate-3"
      />

      <div className="bg-gradient-to-r from-art-purple-200 to-art-pink-100 bg-clip-text text-transparent text-6xl tracking-[25px] drop-shadow-xl font-bold mt-20 p-1">
        Art Factory
      </div>
      <div className="mt-3 ml-40 flex items-center bg-art-purple-100 rounded-full px-12 w-72 h-9">
        <Image src={logo} alt="landingLogo" className=" w-10 mt-3" />
        <p className="text-white tracking-[2px] mx-auto"> photo gallery</p>
      </div>

      <Image
        src={right}
        alt="rightring"
        className="absolute -right-[7%] top-[32%] w-64 rotate-0"
      />
    </div>
  );
};

export default GalleryLanding;
