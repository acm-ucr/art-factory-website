"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/icon.svg";
import { items } from "@/data/navigation";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [selected, setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="font-montserrat w-full px-3 min-h-[9vh] bg-art-blue-100 drop-shadow-lg flex justify-between items-center"
    >
      <Navbar.Brand className="p-0">
        <Link
          eventkey="1"
          className="p-0 flex items-center"
          href="/"
          onClick={() => setSelected("")}
        >
          <Image src={Logo} className="h-[7vh] w-[7vh]" alt="Art Factory" />
          <div className="text-white text-3xl md:text-5xl font-montserrat font-bold md:bg-red-500">
            Art Factory
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className=" text-saf-beige-100 text-xl" />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-nav mx-4">
        <Nav className="w-full md:w-6/12 no-underline text-3xl gap-4 font-semibold bg-red-500 flex items-end justify-end">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              pathname={item.name}
              className="text-white hover:cursor-pointer hover:text-art-purple bg-green-500"
              onClick={() => setSelected(item.name)}
            >
              {item.name}
              <div className="flex justify-center">
                <div
                  className={
                    selected === item.name
                      ? "bg-art-purple p-1 rounded-full"
                      : "p-1"
                  }
                ></div>
              </div>
            </Nav.Link>
          ))}
          <Nav.Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            as={Link}
            target="_blank"
            className="bg-art-purple rounded-full w-fit px-6 py-1 flex justify-center text-white"
          >
            JOIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
