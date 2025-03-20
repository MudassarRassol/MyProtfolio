"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons
import logo from "@/public/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FDFBEE] shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={140} height={26} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 ">
          {["About", "Experience", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`/#${item.toLowerCase()}`}
              className="bg-[#659DAC] text-[#FDFBEE] px-4 py-2 rounded-md shadow-md transition-all hover:scale-105"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[#659DAC]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />} {/* Toggle between menu and close icon */}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Height Transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FDFBEE] px-4 pb-4 shadow-md">
          {["About", "Experience", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`/#${item.toLowerCase()}`}
              className="block text-center bg-[#659DAC] text-[#FDFBEE] my-2 py-2 rounded-md shadow-md transition-all hover:scale-105"
              onClick={() => setMenuOpen(false)} // Close menu when clicked
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
