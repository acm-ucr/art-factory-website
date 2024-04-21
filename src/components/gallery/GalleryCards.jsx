"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const GalleryCards = ({ cards }) => {
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
    <div>
      <div
        style={{ display: "flex", flexWrap: "nowrap" }}
        className="w-full flex justify-center items-center flex-wrap w-full"
      >
        <button onClick={handleLeftClick}>
          <div className="text-5xl text-art-pink-400 hover:text-art-purple-300">
            <FaAngleLeft />
          </div>
        </button>
        <div className="m-4 w-60 h-60 rounded-xl flex justify-center items-center bg-art-purple-100">
          <div className="flex items-center justify-center">
            <Image src={cards[currentCardIndex].image} alt="Image" />
          </div>
        </div>
        <div className="m-4 w-60 h-60 rounded-xl flex justify-center items-center bg-art-purple-100 hidden sm:block">
          <div className="flex items-center justify-center">
            <Image src={cards[currentCardIndex + 1].image} alt="Image" />
          </div>
        </div>
        <div className="m-4 w-60 h-60 rounded-xl flex justify-center items-center bg-art-purple-100 hidden md:block">
          <div className="flex items-center justify-center">
            <Image src={cards[currentCardIndex + 2].image} alt="Image" />
          </div>
        </div>
        <button onClick={handleRightClick}>
          <div className="text-5xl text-art-pink-400 hover:text-art-purple-300">
            <FaAngleRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default GalleryCards;
