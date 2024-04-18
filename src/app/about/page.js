import About from "@/components/about/About";
import React from "react";
import GalleryHeader from "@/components/GalleryHeader";
const page = () => {
  return (
    <div className="flex flex-col items-center">
      <About />
      <GalleryHeader text="Clay" />
      <GalleryHeader text="Crafts" />
      <GalleryHeader text="Studio Time" />
    </div>
  );
};

export default page;
