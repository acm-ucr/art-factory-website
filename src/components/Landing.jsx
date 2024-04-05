import React from "react";
import { Board } from "@/data/board";

const Landing = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      {Board.map((info, index) => (
        <div key={index} className="">
          {info.name}
          {info.title}
          {info.image}
        </div>
      ))}
    </div>
  );
};

export default Landing;
