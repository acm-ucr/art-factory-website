import React from "react";
import Card from "@/components/board/Card";
import Title from "@/components/Title";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Title text={"Meet the Board"} />
      <Card />
    </div>
  );
};

export default page;
