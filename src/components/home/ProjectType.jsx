"use client";
import React from "react";
import Image from "next/image";
// import { motion } from "framer-motion";

const ProjectType = ({ icon, title, description, className = " " }) => {
  return (
    <div
      className={`m-4 p-4 w-80 h-80 rounded-xl shadow-md flex flex-col justify-start items-center gap-2 ${className} transform transition duration-100`}
    >
      <Image
        src={icon}
        alt="Icon"
        className="w-1/2 h-1/4 rounded-xl object-cover overflow-visible mt-6"
      />
      <div className="bg-yellow-200 text-center mt-0 font-bold text-3xl text-white bg-clip-text ">
        {title}
        <div className="text-base mt-1 text-white">{description}</div>
      </div>
    </div>
  );
};

export default ProjectType;
