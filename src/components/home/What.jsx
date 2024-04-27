"use client";
import React from "react";
import Button from "../Button";
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

const What = () => {
  return (
    <motion.div
      variants={animate}
      initial="start"
      whileInView="end"
      transition={{ delay: 0.2 }}
      className="w-9/12 flex flex-col items-center text-center gap-10 mb-0"
    >
      <Title text="About Us" />

      <motion.p
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </motion.p>
      <motion.p
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.6 }}
      >
        <Button text="LEARN MORE" link="/about" />
      </motion.p>
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.8 }}
      >
        <Title text="What We Do" />
      </motion.div>

      <motion.p
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.9 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </motion.p>
    </motion.div>
  );
};

export default What;
