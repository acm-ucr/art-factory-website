import React from "react";
import ProjectType from "@/components/home/ProjectType";
import paintbrush from "@/public/cards/paintbrush.svg";
import hand from "@/public/cards/hand.svg";
import origami from "@/public/cards/origami.svg";
import pencil from "@/public/cards/pencil.svg";
import Vector from "@/public/cards/Vector.svg";

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        <ProjectType
          icon={paintbrush}
          title="Painting"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          className="bg-art-purple"
        />
        <ProjectType
          icon={pencil}
          title="Sketching"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          className="bg-art-purple-100"
        />
        <ProjectType
          icon={hand}
          title="Crafting"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          className="bg-art-purple"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
        <ProjectType
          icon={origami}
          title="DIY"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          className="bg-art-purple"
        />
        <ProjectType
          icon={Vector}
          title="Studio Time"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          className="bg-art-purple-100"
        />
      </div>
    </div>
  );
};

export default Cards;
