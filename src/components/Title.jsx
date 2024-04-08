import React from "react";

const Title = ({ text }) => {
  return (
    <div className="flex-col flex">
      <div className="text-art-pink-100 text-center text-3xl font-bold rounded-full font-urbanist">
        {text}
        <div className="flex rounded bg-art-pink-100 w-1/3 ml-14 h-1" />
      </div>
    </div>
  );
};

export default Title;
