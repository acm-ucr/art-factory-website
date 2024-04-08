import React from "react";

const Title = ({ text }) => {
  return (
    <div className="flex-col flex items-center">
      <div
        className={
          "text-art-pink-100 text-center text-lg font-bold rounded-full font-urbanist"
        }
      >
        {text}
        <div className="rounded bg-art-pink-100 w-5/3 h-1" />
      </div>
    </div>
  );
};

export default Title;
