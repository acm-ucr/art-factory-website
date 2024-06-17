"use client";
import React from "react";
import { socials } from "@/data/socials.js";
import Title from "../Title";
import { motion } from "framer-motion";

const animate = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Socials = () => {
  return (
    <div className="w-5/6">
      <div className="flex flex-col items-center">
        <motion.div
          variants={animate}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.2 }}
        >
          <Title text="Get Involved" />
        </motion.div>

        <motion.div
          variants={animate}
          initial="start"
          whileInView="end"
          transition={{ delay: 0.4 }}
          className=" gap-x-7 md:gap-x-24 mx-auto flex justify-between"
        >
          {socials.map((social, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-4xl lg:text-7xl text-art-pink-100 hover:text-art-purple-100 hover:scale-105 mt-5"
            >
              {social.icon}
              <p className="text-base font-bold">{social.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Socials;
