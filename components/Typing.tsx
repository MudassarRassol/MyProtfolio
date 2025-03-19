"use client"
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typing = () => {
  return (
    <div className="">
      <h1 className=" text-3xl md:text-7xl text-[#FE4F2D] mt-2 ">
        <span className=" font-bold">
          <Typewriter
            words={["MERN Developer", "Fullstack Developer", "Mudassar Rasool"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default Typing;
