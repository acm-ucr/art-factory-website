import landingbg from "../../public/landingbg.svg";
import landingtitle from "../../public/landingtitle.svg";
import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="flex justify-center px-4 py-4">
      <Image
        src={landingbg.src}
        alt="Landing Picture"
        width={1000}
        height={1000}
      />
      <div className="absolute z-10 flex items-center justify-center mt-[13%] px-8">
        <Image
          src={landingtitle.src}
          alt="landingtitle"
          width={760}
          height={760}
        />
      </div>
    </div>
  );
};

export default Landing;
