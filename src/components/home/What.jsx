"use client";
import React from "react";
import Button from "../Button";
import Title from "../Title";
import { motion } from "framer-motion";

const animate = {
  start: {
    opacity: 0,
    y: 40,
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
      className="w-9/12 flex flex-col items-center text-center gap-5 mb-0"
    >
      <Title text="About Us" />

      <motion.p
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.25 }}
        className="w-full md:w-9/12"
      >
        ArtFactory at UCR is a vibrant community of artists established in
        spring 2023. Our mission? To cultivate creativity and exploration across
        various art forms. <br />
        We believe that everyone, regardless of experience, should have a space
        to express themselves artistically. Whether you&apos;re a seasoned
        artist or just starting out, you&apos;re welcome here!
      </motion.p>
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.5 }}
      >
        <motion.p
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 250 },
          }}
          className="mt-2 m-4"
        >
          <Button text="LEARN MORE" link="/about" />
        </motion.p>
      </motion.div>
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.6 }}
      >
        <Title text="What We Do" />
      </motion.div>

      <motion.p
        variants={animate}
        initial="start"
        whileInView="end"
        transition={{ delay: 0.85 }}
      >
        Here at ArtFactory, we use our time to explore different artistic
        mediums. We come together as a community to explore different artistic
        mediums. It doesn&apos;t matter how artistic (or unartistic) you are.
        Simply express yourself!
      </motion.p>
    </motion.div>
  );
};

export default What;
