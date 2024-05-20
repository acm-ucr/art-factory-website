import React from "react";

const GalleryHeader = ({ text }) => {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="border-4 border-art-purple-200 rounded-full ring-1 ring-art-purple-200 ring-offset-[1px] w-54 md:w-104 lg:w-104 lg:h-12 drop-shadow-[4px_4px_0px_rgba(191,140,225,.85)]">
        <div className="py-1 w-48 md:w-96 lg:w-96 bg-art-purple-300 ring-4 ring-offset-[1px] ring-art-pink-400 ring-offset-art-purple-200 rounded-full">
          <div className="flex items-center justify-center px-0.5">
            <div className="text-white text-sm md:text-2xl font-bold">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
