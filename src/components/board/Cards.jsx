import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="translate-y-1/3 w-40 h-1/2 border-[2px] border-art-purple bg-white rounded-full text-art-purple text-sm md:text-lg font bold z-10 flex items-center justify-center">
        Position
      </div>
      <div className="w-60 h-1/2 border-[6.5px] border-art-purple rounded-full md:py-[2px] pt-[1.25px] pb-[2.25px] drop-shadow-[4px_4px_1px_rgba(191,140,225,.70)] z-0 flex items-center justify-center">
        <div className="w-56 h-1/2 py-1 px-8 md:px-12 bg-art-purple-300 ring-4 ring-offset-[1.5px] ring-art-pink-400 ring-offset-art-purple  text-white text-sm md:text-lg font-bold rounded-full z-0 flex items-center justify-center">
          Lydia Niu
        </div>
      </div>
      <div className="m-4 p-4 w-80 h-80 rounded-xl shadow-md flex flex-col justify-start bg-art-purple-100"></div>
    </div>
  );
};

export default Cards;
