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
      <div className="flex justify-center flex-wrap w-full">
        <button onClick={handleLeftClick}>
          <div className="text-5xl text-art-pink-400 hover:text-art-purple-300">
            <FaAngleLeft />
          </div>
        </button>
        {cards
          .slice(currentCardIndex, currentCardIndex + 3)
          .map((card, index) => (
            <div
              key={index}
              className={
                "m-4 w-80 h-80 rounded-xl flex justify-center items-center bg-art-purple-100"
              }
            >
              <Image src={card.image} alt="Image" />
            </div>
          ))}
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
