import React from "react";
import ProjectType from "@/components/ProjectType";
import paintbrush from "@/public/cards/paintbrush.svg";
import hand from "@/public/cards/hand.svg";
import origami from "@/public/cards/origami.svg";
import pencil from "@/public/cards/pencil.svg";
import Vector from "@/public/cards/Vector.svg";

const Cards = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap w-full">
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
        <div className="w-full flex justify-center">
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
    </div>
  );
};

export default Cards;
