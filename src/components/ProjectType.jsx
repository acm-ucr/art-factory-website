import React from "react";
import Image from "next/image";

const ProjectType = ({ icon, title, description, className = " " }) => {
  return (
    <div
      className={`font-poppins m-4 p-4 w-80 h-80 rounded-xl shadow flex flex-col items-center justify-between ${className}`}
    >
      <Image
        src={icon}
        alt="Icon"
        className="w-3/4 h-3/4 rounded-xl object-cover"
      />
      <div className="text-center">
        <div className="mt-2 font-bold text-xl text-white bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple">
          {title}
        </div>
        <div className="text-base mt-1 text-white">{description}</div>
      </div>
    </div>
  );
};

export default ProjectType;
