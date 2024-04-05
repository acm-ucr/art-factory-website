import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="ring-1 ring-art-purple ring-offset-[5px] rounded-full drop-shadow-[4px_4px_1px_rgba(191,140,225,.70)]"
    >
      <div className="py-1 px-8 md:px-12 bg-art-purple/30 ring-4 ring-offset-[1.5px] ring-offset-art-purple ring-art-purple/30 text-white text-sm md:text-lg font-bold rounded-full">
        {text}
      </div>
    </Link>
  );
};

export default Button;
