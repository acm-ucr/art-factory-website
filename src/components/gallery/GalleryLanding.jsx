import React from "react";
import Image from "next/image";
import right from "@/public/aboutlanding/rightring.svg";
import left from "@/public/left.svg";
import logo from "@/public/LogoLanding.svg";

const GalleryLanding = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center relative">
      <Image
        src={left}
        alt="leftring"
        className="absolute left-[-2%]  top-[74%]  w-36 rotate-6 sm:-left-[3%] sm:top-[69%] sm:w-60 "
      />

      <div className="bg-gradient-to-r from-art-purple-200 to-art-pink-100 bg-clip-text text-transparent ml-6 sm:ml-7 sm:0 text-4xl sm:text-6xl tracking-[10px] sm:tracking-[23px] font-bold mt-20 p-1">
        Art Factory
      </div>
      <div className="flex items-center bg-art-purple-100 rounded-full mt-1 px-3  h-7  ml-16 md:ml-18 sm:mt-3 sm:px-3 sm:w-72 sm:h-9 sm:ml-32 overflow-auto z-10">
        <Image
          src={logo}
          alt="landingLogo"
          className=" scale-75 md:scale-90 mt-3"
        />
        <p className="text-white text-base tracking-[2px] mx-auto">
          {" "}
          photo gallery
        </p>
      </div>

      <Image
        src={right}
        alt="rightring"
        className="absolute right-[-7%] top-[47%]  w-36 sm:-right-[5%] sm:top-[34%] sm:w-60 sm:rotate-1"
      />
    </div>
  );
};

export default GalleryLanding;
