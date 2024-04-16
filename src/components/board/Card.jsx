import React from "react";

import Cards from "./Cards";
const Card = () => {
  return (
    <div className="w-full h-full">
      <div className="h-full w-full grid grid-cols-3 gap-3">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Card;
