"use client";

import { useState } from "react";
import Image from "next/legacy/image";
import Logo from "./Logo";
import ButtonWhatsapp from "./ButtonWhatsapp";
import { poppins400 } from "@/fonts";
import { motion } from "framer-motion";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = (id: string) => {
    const anchor = document.createElement("a");
    anchor.href = id;
    anchor.click();
    anchor.remove();
  };

  const navMenu: { label: string; id: string }[] = [
    {
      label: "Beranda",
      id: "#home",
    },
    {
      label: "Tentang Kami",
      id: "#about",
    },
    {
      label: "Layanan",
      id: "#service",
    },
  ];

  return (
    <>
      <header className="shadow fixed w-full  z-10" style={poppins400.style}>
        <div className="shadow fixed w-full h-14 md:h-20 lg:h-24 bg-white -z-10">
          &nbsp;
        </div>
        <div className="md:container mx-auto flex justify-between items-center py-2 px-4 md:px-0 bg-white">
          <Logo />
          <div className="md:hidden">
            <Image
              style={{ color: "white" }}
              src="/assets/icons/hamburger-menu.svg"
              alt="hamburger-menu"
              width={24}
              height={24}
              onClick={() => setIsShow(!isShow)}
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <ul className="flex space-x-4">
              {navMenu?.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  <a href={item.id}>{item.label}</a>
                </li>
              ))}
            </ul>
            <ButtonWhatsapp />
          </div>
        </div>
      </header>
      <motion.div
        className="fixed top-10 left-0 right-0 bottom-0 mt-8"
        style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
        animate={{
          display: isShow ? "inherit" : "none",
          opacity: isShow ? 1 : 0,
        }}
        onClick={() => setIsShow(false)}
      >
        <motion.ul className="flex flex-col space-y-4 bg-white pb-6">
          {navMenu?.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default Header;
