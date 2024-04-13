import React from "react";
import GalleryCards from "@/components/GalleryCards";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Gallery</p>
      <GalleryCards />
    </div>
  );
};

export default page;
