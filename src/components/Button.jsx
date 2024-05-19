import React from "react";
import Link from "next/link";
const Button = ({ text, link }) => {
  return (
    <button className="border-[6.5px] border-art-purple-200 rounded-full md:py-[2px] pt-[1.25px] pb-[2.25px] drop-shadow-[4px_4px_0px_rgba(191,140,225,.70)]">
      <Link
        href={link}
        className="py-1 px-8 md:px-12 bg-art-purple-300 ring-4 ring-offset-[1.5px] ring-art-pink-400 ring-offset-art-purple-200  text-white text-sm md:text-lg font-bold rounded-full"
      >
        {text}
      </Link>
    </button>
  );
};

export default Button;
