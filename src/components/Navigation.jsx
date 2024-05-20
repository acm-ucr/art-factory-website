"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/icon.svg";
import { items } from "@/data/navigation";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);

  return (
    <div className="px-2 md:px-8 sticky py-3 top-0 z-30 bg-art-purple-100 w-screen flex justify-between items-center text-xl md:text-xl 2xl:text-2xl">
      <Link
        onClick={() => {
          setSelected("");
        }}
        href="/"
        className="flex gap-2 text-white items-center"
      >
        <Image
          src={Logo}
          alt="Logo"
          className="left-0 w-12 md:w-16 hover:opacity-60 duration-300 font-semibold"
        />
        Art Factory
      </Link>
      <div className="hidden absolute right-0 md:flex justify-between w-2/5 pr-20 ">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
              handleNav();
            }}
            className={`hover:text-pink-300 duration-300 border-solid font-semibold py-2 ${
              selected === item.name
                ? ""
                : item.name === "JOIN"
                ? "bg-art-pink-200 rounded-full w-fit px-12 flex justify-center text-white"
                : "text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* mobile menu */}

      <div
        className={`fixed ${
          nav
            ? "transition transform ease-out duration-500 translate-y-[68px] opacity-100"
            : "hidden transition duration-500 ease-in transform -translate-y-24 opacity-0"
        } md:hidden flex flex-col items-center justify-evenly w-full duration-500 bg-white top-0 left-0 right-0 -z-10`}
      >
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
              handleNav();
            }}
            className={`hover:text-swim-blue-300 duration-300 border-solid font-semibold py-2 ${
              selected === item.name
                ? "border-b-2 border-swim-yellow text-swim-blue-300"
                : "text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div onClick={() => setNav(!nav)}>
        <FaBars className="text-3xl flex md:hidden text-white hover:cursor-pointer hover:text-swim-blue-300 justify-self-end" />
      </div>
    </div>
  );
};

export default Navigation;
