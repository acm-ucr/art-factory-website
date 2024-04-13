import React from "react";
import Image from "next/image";

const PhotoCard = ({ icon }) => {
  return (
    <div
      className={
        "m-4 w-80 h-80 rounded-xl flex justify-center items-center bg-art-purple-100"
      }
    >
      <Image src={icon} alt="Icon" />
    </div>
  );
};

export default PhotoCard;
