import landingbg from "../../public/landingbg.svg";
import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div>
      <Image
        src={landingbg.src}
        alt="landingbg"
        width={1000}
        height={800}
        className="pt-4 px-8"
      />
    </div>
  );
};

export default Landing;
