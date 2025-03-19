"use client"
import React from 'react'
import { RiScrollToBottomFill } from "react-icons/ri";
import blob from "@/public/mudassar.png";
import Image from "next/image";
const Aboutme = () => {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="about-us" className="flex flex-col items-center justify-center relative overflow-hidden  h-auto md:h-[100vh]  ">
    <div className="flex flex-col items-center md:flex-row  gap-0 md:gap-30 justify-center mt-10 p-3" >
    <div className="w-full md:w-1/2 flex items-center justify-center  bg  py-10 px-14 custom-spin  ">
      <Image
        src={blob}
        alt="Logo"
        width={400}
        height={400}
        className="rounded-full border-2 border-[#FDFBEE] mb-4   anticlock-spin   "
      />
    </div>
    <div id="about" className="w-full h-screen md:w-1/2 flex flex-col items-center justify-center  px-5 ">
      <h2 className="text-3xl font-bold text-[#FE4F2D]">About Me</h2>
      <p className="text-lg mt-4 leading-relaxed">
       {` I'm`} a passionate{" "}
          <span className="font-semibold text-[#FE4F2D]">Software Engineer</span> dedicated
        to crafting high-performance, user-friendly applications. With
        expertise in
        <span className="font-semibold text-[#FE4F2D] ">
          {" "}
          React.js, Next.js, and modern web technologies
        </span>
        , I specialize in building scalable solutions that enhance user
        experiences.
      </p>
      <p className="text-lg mt-4  leading-relaxed">
        I thrive in{" "}
        <span className="font-semibold text-[#FE4F2D]">collaborative environments</span>{" "}
        and enjoy tackling complex challenges. Currently working remotely, I
        stay up-to-date with the latest advancements in web development,
        always eager to explore new tools and frameworks.
      </p>
      <p className="text-lg mt-4  leading-relaxed">
        When I’m not coding, you’ll find me exploring new technologies,
        contributing to open-source projects, or sharing knowledge with the
        developer community.
      </p>
    </div>
    </div>

    <RiScrollToBottomFill
      size={30}
      className="text-[#FE4F2D]  mt-0  md:-mt-30  mb-4 animate-pulse cursor-pointer "
      onClick={scrollToExperience}
    />
  </div>
  )
}

export default Aboutme