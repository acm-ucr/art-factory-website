import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      className=" py-1 px-14 bg-art-purple/50 border-1 border-[#C08CE1] ring-[2px] ring-offset-1 ring-offset-art-purple ring-art-purple/30
    text-white font-bold rounded-full shadow-md hover:shadow-lg transition-transform duration-200 drop-shadow-2xl"
      href={link}
    >
      {text}
    </Link>
  );
};

export default Button;
