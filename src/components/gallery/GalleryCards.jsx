"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import GalleryHeader from "./GalleryHeader";

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
    <div className=" flex justify-center flex-col items-center w-full gap-6 mb-3">
      <GalleryHeader text={title} />
      <div className="flex w-full justify-center mt-2">
        <button
          onClick={handleLeftClick}
          className="flex justify-center items-center"
        >
          <FaAngleLeft className="md:text-8xl text-6xl text-art-pink-400 hover:text-art-purple-300" />
        </button>
        <Image
          src={cards[currentCardIndex].image}
          alt="Image"
          className="md:w-80 md:h-80 w-60 h-60 rounded-xl flex justify-center items-center bg-art-purple-100 
          transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <Image
          src={cards[currentCardIndex + 1].image}
          alt="Image"
          className="ml-4 w-80 h-80 rounded-xl justify-center items-center bg-art-purple-100 hidden md:block
          transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <Image
          src={cards[currentCardIndex + 2].image}
          alt="Image"
          className="ml-4 w-80 h-80 rounded-xl justify-center items-center bg-art-purple-100 hidden lg:block
          transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
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
