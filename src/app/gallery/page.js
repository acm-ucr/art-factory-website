import React from "react";
import GalleryHeader from "@/components/GalleryHeader";
import GalleryCards from "@/components/gallery/GalleryCards";
import * as images from "@/data/images.js";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Gallery</p>
      <GalleryCards cards={images.clay} />
      <GalleryHeader text="Clay" />
      <GalleryHeader text="Crafts" />
      <GalleryHeader text="Studio Time" />
    </div>
  );
};

export default page;
