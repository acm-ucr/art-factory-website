import React from "react";
import Image from "next/image";

const ProjectType = ({ icon, title, description, className = " " }) => {
  return (
    <div
      className={`m-4 p-4 w-80 h-80 rounded-xl shadow flex flex-col items-center justify-center ${className}`}
    >
      <Image
        src={icon}
        alt="Icon"
        className="w-1/8 h-1/8 rounded-xl object-cover -translate-y-1/4"
      />
      <div className="text-center">
        <div className="mt-2 font-bold text-xl -translate-y-3/4 text-white bg-clip-text">
          {title}
        </div>
        <div className="text-base mt-1 text-white">{description}</div>
      </div>
    </div>
  );
};

export default ProjectType;
