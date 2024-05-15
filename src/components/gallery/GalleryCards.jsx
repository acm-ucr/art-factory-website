"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import GalleryHeader from "./GalleryHeader";

const GalleryCards = ({ cards, title }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [numCards, setNumCards] = useState(1);

  useEffect(() => {
    setHeaderVisible(true);
    const updateNumCards = () => {
      if (window.innerWidth >= 1024) {
        setNumCards(3); // Laptops and larger screens
      } else if (window.innerWidth >= 768) {
        setNumCards(2); // Tablets (iPads)
      } else {
        setNumCards(1); // Phones
      }
    };

    updateNumCards(); // initial value
    window.addEventListener("resize", updateNumCards); // update on resize

    return () => {
      window.removeEventListener("resize", updateNumCards);
    };
  }, []);

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
      <div
        className={`${
          headerVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        } transition-all duration-700 ease-in-out`}
      >
        <GalleryHeader text={title} />
      </div>
      <div className="flex w-full justify-center items-center mt-2">
        <div className="flex justify-center items-center">
          <button
            onClick={handleLeftClick}
            className="flex justify-center items-center"
          >
            <FaAngleLeft className="md:text-8xl text-6xl text-art-pink-400 hover:text-art-purple-300 transition duration-300 ease-in-out" />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex gap-4">
            {cards
              .slice(currentCardIndex, currentCardIndex + numCards)
              .map((card, index) => (
                <Image
                  key={index}
                  src={card.image}
                  alt="Image"
                  className="md:w-80 md:h-80 w-60 h-60 rounded-xl flex justify-center items-center 
                bg-art-purple-100 transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              ))}
          </div>
          <button
            onClick={handleRightClick}
            className="flex justify-center items-center"
          >
            <FaAngleRight className="md:text-8xl text-6xl text-art-pink-400 hover:text-art-purple-300 transition duration-300 ease-in-out" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
