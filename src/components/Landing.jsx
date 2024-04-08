import landingbg from "../../public/landingbg.svg";
import landingtitle from "../../public/landingtitle.svg";
import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="flex justify-center px-4 py-4">
      <Image src={landingbg} alt="Landing Picture" className="w-5/6" />
      <div className="absolute z-10 flex items-center justify-center mt-[13%] md:mt-[16%] px-8">
        <Image src={landingtitle} alt="landingtitle" className="w-5/6" />
      </div>
    </div>
  );
};

export default Landing;
