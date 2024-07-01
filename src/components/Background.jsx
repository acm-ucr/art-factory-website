// components/Background.jsx

import React from "react";
import Image from "next/image";
import BackgroundClouds from "../../public/Background.svg";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundClouds}
          alt="Background Clouds"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;