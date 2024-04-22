import React from "react";
import GalleryCards from "@/components/gallery/GalleryCards";
import * as images from "@/data/images.js";
// import GalleryLanding from "@/components/gallery/GalleryLanding";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-16">
      {/* <GalleryLanding /> */}
      <GalleryCards cards={images.clay} title={"Clay"} />
      <GalleryCards cards={images.clay} title={"Crafts"} />
      <GalleryCards cards={images.clay} title={"Studio Time"} />
    </div>
  );
};

export default page;
