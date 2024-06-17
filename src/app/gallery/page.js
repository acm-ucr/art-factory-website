"use client";
import React from "react";
import GalleryCards from "@/components/gallery/GalleryCards";
import { ITEMS } from "@/data/images.js";
import GalleryLanding from "@/components/gallery/GalleryLanding";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const page = () => {
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="visible"
      className="w-full flex flex-col items-center gap-16"
    >
      <GalleryLanding />
      {Object.keys(ITEMS).map((category, index) => (
        <motion.div
          key={index}
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: index * 0.3 }}
          className="w-full"
        >
          <GalleryCards cards={ITEMS[category]} title={category} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default page;
