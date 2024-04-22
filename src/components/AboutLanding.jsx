import React from "react";
import Image from "next/image";
import right from "../../../public/rightring.svg";
import left from "../../../public/leftring.svg";
import logo from "../../../public/LogoLanding.svg";

const Landing = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center relative">
      <Image
        src={left}
        alt="leftring"
        className="absolute left-[32%] top-[67%] w-64 rotate-3"
      />

      <div className="text-purple-400 text-6xl tracking-[25px] drop-shadow-xl font-bold mt-20 ">
        Art Factory
      </div>

      <div className="mt-3 flex items-center bg-indigo-500 rounded-full px-3 w-96 h-9 ml-10">
        <Image src={logo} alt="landingLogo" className=" w-10 mt-3" />
        <p className="text-white tracking-[2px] mx-auto">
          {" "}
          learn more about our club
        </p>
      </div>

      <Image
        src={right}
        alt="rightring"
        className="absolute right-[32%] top-[30%] w-64 rotate-3"
      />
    </div>
  );
};

export default AboutLanding;
