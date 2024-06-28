"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import GalleryHeader from "./GalleryHeader";
import { motion } from "framer-motion";

const GalleryCards = ({ cards, title }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else {
      setCurrentCardIndex(cards.length - 3);
    }
  };

  const handleRightClick = () => {
    if (currentCardIndex < cards.length - 3) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center w-full gap-6 mb-3">
      <GalleryHeader text={title} />
      <div className="flex w-full justify-between mt-2">
        <button
          onClick={handleLeftClick}
          className="flex justify-center items-center"
        >
          <FaAngleLeft className="md:text-8xl text-6xl text-art-pink-400 hover:text-art-purple-300" />
        </button>
        <div className="flex justify-center items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-60 h-60 md:w-80 md:h-80 rounded-xl justify-center items-center bg-art-purple-100"
          >
            <Image
              src={cards[currentCardIndex].image}
              alt={`Image ${currentCardIndex}`}
              className="rounded-xl p-3 h-60 md:h-80  object-cover"
            />
          </motion.div>
          {cards[currentCardIndex + 1] && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden md:block md:w-80 md:h-80 ml-4 rounded-xl justify-center items-center bg-art-purple-100"
            >
              <Image
                src={cards[currentCardIndex + 1].image}
                alt={`Image ${currentCardIndex + 1}`}
                className="rounded-xl p-3 h-80  object-cover"
              />
            </motion.div>
          )}
          {cards[currentCardIndex + 2] && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden lg:block lg:w-80 lg:h-80 ml-4 rounded-xl justify-center items-center bg-art-purple-100"
            >
              <Image
                src={cards[currentCardIndex + 2].image}
                alt={`Image ${currentCardIndex + 2}`}
                className="rounded-xl p-3 h-80 object-cover"
              />
            </motion.div>
          )}
        </div>
        <button
          onClick={handleRightClick}
          className="flex justify-center items-center"
        >
          <FaAngleRight className="md:text-8xl text-6xl text-art-pink-400 hover:text-art-purple-300" />
        </button>
      </div>
    </div>
  );
};

export default GalleryCards;
