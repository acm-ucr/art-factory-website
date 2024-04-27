import React from "react";
import Title from "@/components/Title";
import Boards from "@/components/board/Boards";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Title text={"Meet the Board"} />
      <Boards />
    </div>
  );
};

export default page;
