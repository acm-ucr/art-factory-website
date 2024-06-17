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

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="px-2 md:px-8 sticky py-3 top-0 z-30 bg-art-purple-100 w-screen flex justify-between items-center text-2xl sm:text-2xl md:text-xl lg:text-2xl">
      <Link
        onClick={() => {
          setSelected("");
        }}
        href="/"
        className="flex items-center"
      >
        <Image
          src={Logo}
          alt="Logo"
          className="left-0 w-12 md:w-14 lg:w-16 hover:opacity-60 duration-300 font-semibold"
        />
        <span className="sm:text-2xl md:text-xl lg:text-3xl text-white whitespace-nowrap ml-4">
          Art Factory
        </span>
      </Link>
      <div className="hidden md:flex justify-end w-full gap-4 space-x-2">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <Link
              href={item.link}
              onClick={() => {
                setSelected(item.name);
                handleNav();
              }}
              className={`hover:text-art-pink-100 text-3xl duration-300 border-solid font-semibold py-2 mx-2 ${
                selected === item.name
                  ? item.name === "JOIN"
                    ? "bg-gradient-to-r from-art-pink-200 text-xl to-art-purple-200 rounded-full px-12 text-white"
                    : "text-art-pink-100"
                  : item.name === "JOIN"
                  ? "bg-gradient-to-r from-art-pink-200 text-2xl to-art-purple-200 hover:text-white rounded-full px-12 text-white"
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
            {selected === item.name && item.name !== "JOIN" && (
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-art-pink-100"></div>
            )}
          </div>
        ))}
      </div>
      {/* mobile menu */}
      <div
        className={`fixed ${
          nav
            ? "transition transform ease-out duration-500 translate-y-[68px] opacity-100"
            : "hidden transition duration-500 ease-in transform -translate-y-24 opacity-0"
        } md:hidden flex flex-col items-center justify-evenly w-full duration-500 bg-art-purple-100 top-0 left-0 right-0 -z-10`}
      >
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
              handleNav();
            }}
            className={`hover:text-art-pink-100 duration-300 border-solid font-semibold py-2 mx-2 ${
              selected === item.name ? "text-art-pink-100" : "text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div onClick={handleNav}>
        <FaBars
          className={`text-3xl flex md:hidden ${
            nav ? "text-art-pink-100" : "text-white"
          } hover:cursor-pointer hover:text-art-pink-100 justify-self-end`}
        />
      </div>
    </div>
  );
};

export default Navigation;
