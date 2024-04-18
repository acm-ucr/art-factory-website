import React from "react";
import GalleryHeader from "@/components/GalleryHeader";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p>Gallery</p>
      <GalleryHeader text="Clay" />
      <GalleryHeader text="Crafts" />
      <GalleryHeader text="Studio Time" />
    </div>
  );
};

export default page;
