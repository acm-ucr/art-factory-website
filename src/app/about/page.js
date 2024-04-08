import React from "react";
import Image from "next/image";
import right from "../../../public/rightring.svg";
import left from "../../../public/leftring.svg";
import logo from "../../../public/Logo.svg";

const Landing = () => {
  return (
    <div className="bg-white">
      <div className="w-full flex flex-col items-center">
        <div className="absolute top-1 right-0 transform translate-y-[5%] translate-x-[-335%]">
          <Image src={right} alt="rightring" width={200} height={200} />
        </div>

        <div className="text-purple-400 text-5xl tracking-[25px] font-bold">
          <p>art factory</p>
        </div>

        <div className="bg-indigo-500 rounded-full px-3 flex itmes-center w-1/6 h-9">
          <Image src={logo} alt="landingLogo" className="mr-7" />
          <div className="text-white mt-2">
            <p>learn more about our club</p>
          </div>
        </div>

        <div className="absolute top-1 left-0 transform translate-y-[80%] translate-x-[330%]">
          <Image src={left} alt="leftring" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
