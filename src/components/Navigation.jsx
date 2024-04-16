"use client";
// import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
// import hry from "../../public/icon.webp";
import Logo from "../../public/Logo.svg"

const Navigation = () => {
  // const [selected, setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-montserrat w-full px-3 m-0 min-h-[9vh] bg-art-blue-100 drop-shadow-lg flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="p-0">
        <Link
          eventkey="1"
          className="p-0 flex justify-center items-center"
          href="/"
          onClick={() => setSelected("")}
        >
          <Image src={Logo} className="h-[7vh] w-[7vh]" alt="HSP at UCR"/>
          <div className="text-white text-3xl md:text-5xl font-montserrat font-bold ml-4">
            Art Factory
          </div>
        </Link>
      </Navbar.Brand>
      
     
     

        
        <Nav className="w-full md:w-6/12 ml-auto no-underline text-2xl flex justify-end">
            {items.map((item, index) => (
              <Nav.Link
                as={Link}
                key={index}
                href={item.link}
                pathname={item.name}
                className="text-white hover:cursor-pointer">
                  {item.name}
              </Nav.Link>
            ))}
          
      
          
          
         
        </Nav>
        
    </Navbar>
    
  );
};

export default Navigation;