import React from "react";

const GalleryHeader = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-[5.5px] border-art-purple rounded-full md:py-[2px] pt-[1.25px] pb-[1.25px] drop-shadow-[4px_4px_0px_rgba(191,140,225,.70)]">
        <div className="py-1 px-14 sm:px-20 md:px-32 bg-art-purple-300 ring-4 ring-offset-[1.5px] ring-art-pink-400 ring-offset-art-purple  text-white text-sm md:text-2xl font-bold rounded-full">
          {text}
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
