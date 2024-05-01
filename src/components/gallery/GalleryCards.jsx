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
    }
  };

  const handleRightClick = () => {
    if (currentCardIndex < cards.length - 3) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  return (
    <div className=" flex justify-center flex-col items-center w-full gap-6 mb-3">
      <GalleryHeader text={title} />
      <div className="flex w-full justify-center justify-between mt-2">
        <button
          onClick={handleLeftClick}
          className="flex justify-center items-center"
        >
          <FaAngleLeft className="text-8xl text-art-pink-400 hover:text-art-purple-300" />
        </button>
        <Image
          src={cards[currentCardIndex].image}
          alt="Image"
          className="w-80 h-80 rounded-xl flex justify-center items-center bg-art-purple-100"
        />
        <Image
          src={cards[currentCardIndex + 1].image}
          alt="Image"
          className="ml-4 w-80 h-80 rounded-xl justify-center items-center bg-art-purple-100 hidden lg:block"
        />
        <Image
          src={cards[currentCardIndex + 2].image}
          alt="Image"
          className="ml-4 w-80 h-80 rounded-xl justify-center items-center bg-art-purple-100 hidden md:block"
        />
        <button
          onClick={handleRightClick}
          className="flex justify-center items-center"
        >
          <FaAngleRight className="text-8xl text-art-pink-400 hover:text-art-purple-300" />
        </button>
      </div>
    </div>
  );
};

export default GalleryCards;
