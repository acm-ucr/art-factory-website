import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="ring-2 ring-art-purple ring-offset-4 rounded-full drop-shadow-[4px_4px_1px_rgba(191,140,225,.70)]"
    >
      <div className="py-1 px-8 md:px-16 bg-art-purple/35 ring-4 ring-offset-[2px] ring-offset-art-purple ring-art-purple/30 text-white text-sm md:text-xl font-bold rounded-full">
        {text}
      </div>
    </Link>
  );
};

export default Button;
