import React from "react";
import Title from "@/components/Title";
import Cards from "@/components/board/Cards";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Title text={"Meet the Board"} />
      <Cards />
    </div>
  );
};

export default page;
