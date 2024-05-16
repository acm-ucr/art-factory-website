import React from "react";
import Button from "@/components/Button.jsx";
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
          description="At ArtFactory, we incorporate the classic practice of painting into most of our events, 
                      providing therapeutic experience for most art enjoyers."
          className="bg-art-purple-200"
        />
        <ProjectType
          icon={pencil}
          title="Sketching"
          description="Sketching plays a crucial role in most craft activities. With ArtFactory, 
                      members will get to practice with the foundational step of creativity."
          className="bg-art-purple-100"
        />
        <ProjectType
          icon={hand}
          title="Crafting"
          description="Crafting activities are exciting ways to incorporate creativity with practicality. 
                      Our club offers fun and interactive crafting events with supply included."
          className="bg-art-purple-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
        <ProjectType
          icon={origami}
          title="DIY"
          description="DIY provides the manufacturing experience of our daily objects. With these activities, 
                      members can have a sentimental connection with modern availability and appreciation for craftsmanship."
          className="bg-art-purple-200"
        />
        <ProjectType
          icon={Vector}
          title="Studio Time"
          description="Studio Art majors can take advantage of our studio time for their own projects, 
                    while other members get hands-on comprehensive art experience to their fullest potential!"
          className="bg-art-purple-100"
        />
      </div>

      <br></br>

      <Button text="View Past Projects" link="/gallery" />
    </div>
  );
};

export default Cards;
