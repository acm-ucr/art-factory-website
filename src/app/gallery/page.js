import React from "react";
import GalleryCards from "@/components/GalleryCards";
import { cards as photoSet1 } from "@/data/photoSet1.js";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Gallery</p>
      <GalleryCards cards={photoSet1} />
    </div>
  );
};

export default page;
