"use client"  

import Image from "next/image";
import React from 'react'
import Typing from "@/components/Typing";
import react from "@/public/react-svgrepo-com.svg";
import tailwind from "@/public/tailwind-svgrepo-com.svg";
import nextjs from "@/public/nextjs-svgrepo-com (2).svg";
import mongodb from "@/public/mongodb-svgrepo-com.svg";
import { GoDesktopDownload } from "react-icons/go";
import { RiScrollToBottomFill } from "react-icons/ri";  
const Herosection = () => {
      const scrollToAbout = () => {
        document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <div className="bg-[#659DAC] flex flex-col  justify-center items-center">
    {/* Hero Section */}
    <div className="w-full  h-auto md:h-[87.2vh]  mt-4 relative p-3 flex flex-col md:flex-row  gap-0 md:gap-30 items-center">
      {/* Text Content */}
      <div className="text-[#FDFBEE]   px-6 pt-6 font-bold md:w-1/2">
        <h1 className="  text-md  md:text-5xl ">Hi there 👋 {`I'm`}</h1>
        <Typing />
        <p className="mt-4 text-lg  mb-3 md:mb-0">
          {`I'm`} a Software Engineer specializing in React and Next.js.
          Currently working remotely, I enjoy building innovative solutions
          and collaborating with teams to create impactful products.
        </p>
      </div>

      {/* Spinning Tech Logos */}
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]  bg-[#FDFBEE] rounded-full flex items-center justify-center overflow-hidden   m-0 md:ml-10 ">
        <div className="w-[270px] h-[270px] md:w-[450px] md:h-[450px] border-2 rounded-full flex items-center justify-center relative custom-spin">
          <Image
            src={react}
            alt="React Logo"
            width={50}
            height={50}
            className="absolute top-8 left-2 md:left-6 md:top-14"
          />
          <Image
            src={tailwind}
            alt="Tailwind Logo"
            width={50}
            height={50}
            className="absolute bottom-8 left-2 md:left-6 md:bottom-14"
          />
          <Image
            src={nextjs}
            alt="Next.js Logo"
            width={50}
            height={50}
            className="absolute bottom-8 right-3 md:right-8 md:bottom-14"
          />
          <Image
            src={mongodb}
            alt="MongoDB Logo"
            width={50}
            height={50}
            className="absolute top-8 md:right-8 right-3  md:top-14"
          />
    <div className="bg-[#659DAC] anticlock-spin text-[#FDFBEE] w-[100px] h-[100px] rounded-full flex items-center justify-center">
      <a
        href="/Resume.pdf" // Ensure the file is inside the "public" folder
        download="Resume.pdf"
        className="bg-[#659DAC] text-center text-[#FDFBEE] w-[100px] h-[100px] rounded-full flex items-center justify-center font-bold shadow-lg hover:scale-105 transition-all cursor-pointer flex-col"
      >
        <GoDesktopDownload size={25} /> Resume
      </a>
    </div>
        </div>
      </div>
    </div>
    <RiScrollToBottomFill
      size={30}
      className="text-[#FDFBEE]  mt-0  md:-mt-10  mb-4 animate-pulse cursor-pointer "
      onClick={scrollToAbout}
    />
  </div>
  )
}

export default Herosection