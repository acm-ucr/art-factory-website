import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <div className="py-0.5 ring-2 ring-art-purple ring-offset-4 rounded-full drop-shadow-[4px_4px_1px_rgba(191,140,225,.70)]">
      <Link
        href={link}
        className="py-1 px-16 bg-art-purple/35 ring-4 ring-offset-[2px] ring-offset-art-purple ring-art-purple/30 text-white text-xl font-bold rounded-full"
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
