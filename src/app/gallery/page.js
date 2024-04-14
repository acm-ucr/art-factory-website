import React from "react";
import GalleryCards from "@/components/GalleryCards";
import { cards as data1 } from "@/data/photoSet1.js";
import { cards as data2 } from "@/data/photoSet2.js";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Gallery</p>
      <GalleryCards cards={data1} />
      <GalleryCards cards={data2} />
    </div>
  );
};

export default page;
