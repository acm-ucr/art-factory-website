"use client";
import landingbg from "@/public/landing/landingbg.svg";
import leftcurve from "@/public/landing/leftcurve.svg";
import rightcurve from "@/public/landing/rightcurve.svg";
import logo from "@/public/LogoLanding.svg";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const titleanimations = {
  start: {
    opacity: 0,
    y: -30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const ringanimations = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const Landing = () => {
  return (
    <div className="flex justify-center">
      <Image src={landingbg} alt="Landing Picture" className="w-5/6" />
      <div className="absolute z-10 flex items-center top-[22%] min-[390px]:top-[18.5%] md:top-[45%] 2xl:top-[40%] justify-center px-8">
        <motion.div
          variants={ringanimations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.3 }}
        >
          <Image
            src={leftcurve}
            alt="leftring"
            className="absolute left-[4%] md:-left-[3%] top-[66%] md:top-[80%] w-28 md:w-64 rotate-2 md:rotate-5 animate-pulse"
          />
          <Image
            src={rightcurve}
            alt="rightring"
            className="absolute right-[2%] md:-right-[5%] -mt-[8%] md:-mt-[9%] w-28 md:w-5/12 -rotate-2 animate-pulse"
          />
        </motion.div>
        <motion.div
          className="text-white font-lora text-2xl md:text-6xl tracking-[10px] md:tracking-[25px] drop-shadow-xl font-bold p-1"
          variants={titleanimations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          art factory
        </motion.div>

        <motion.div
          className="absolute mt-[16%] md:mt-[18%] flex items-center bg-art-purple-100 rounded-full px-3 w-54 md:w-8/12 h-[17px] md:h-10 ml-6"
          variants={titleanimations}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.4 }}
        >
          <Image
            src={logo}
            alt="landingLogo"
            className="w-4 md:w-10 mt-[5px] 0 md:mt-3"
          />
          <p className="text-white text-[8px] md:text-xl md:tracking-[2px] mx-auto">
            {" "}
            university of california, riverside
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
