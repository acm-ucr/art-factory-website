import React from "react";
import GalleryCards from "@/components/GalleryCards";
import * as images from "@/data/images.js";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Gallery</p>
      <GalleryCards cards={images.clay} />
    </div>
  );
};

export default page;
