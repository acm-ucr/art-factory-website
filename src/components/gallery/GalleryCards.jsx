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
    <div
      style={{ display: "flex", flexWrap: "nowrap" }}
      className="w-4/6 flex justify-center items-center w-full"
    >
      <button
        onClick={handleLeftClick}
        className="flex justify-center items-center"
      >
        <FaAngleLeft className="text-5xl text-art-pink-400 hover:text-art-purple-300" />
      </button>
      <Image
        src={cards[currentCardIndex].image}
        alt="Image"
        className="w-60 h-60 rounded-xl flex justify-center items-center bg-art-purple-100"
      />
      <Image
        src={cards[currentCardIndex + 1].image}
        alt="Image"
        className="ml-4 w-60 h-60 rounded-xl flex justify-center items-center bg-art-purple-100 hidden lg:block"
      />
      <Image
        src={cards[currentCardIndex + 2].image}
        alt="Image"
        className="ml-4 w-60 h-60 rounded-xl flex justify-center items-center bg-art-purple-100 hidden sm:block"
      />
      <button
        onClick={handleRightClick}
        className="flex justify-center items-center"
      >
        <FaAngleRight className="text-5xl text-art-pink-400 hover:text-art-purple-300" />
      </button>
    </div>
  );
};

export default GalleryCards;
