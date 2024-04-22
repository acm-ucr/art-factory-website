import React from "react";
import Cards from "@/components/board/Cards";
import Title from "@/components/Title";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Title text={"Meet the Board"} />
      <Cards />
    </div>
  );
};

export default page;
