"use client"
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const Project = () => {
  return (
    <div id="projects" className="w-full border-t-2 border-t-[#FE4F2D]">
      <h1 className="text-3xl font-bold text-center mt-20 text-[#FE4F2D]">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        {["Project 1"].map((project, index) => (
          <div
            key={index}
            className="relative h-[400px] w-full rounded-lg overflow-hidden proj1 mt-20 shadow-[-7px_7px_5px_0px_#FE4F2D]"
          >
            <div className="relative">
              <div
                className=" w-[150px] h-[150px]  md:w-[200px] max-w-[250px] md:h-[200px] max-h-[250px]
        bg-[#FDFBEE] rounded-b-full rounded-l-full absolute -right-14 -top-14
        border-2 border-[#FE4F2D] flex items-center justify-center 
        hover:scale-[1.25] transition-transform duration-300 ease-in-out cursor-pointer z-50"
        onClick={() => window.open("https://bloger-g5qouka2x-mudassardevs-projects.vercel.app/", "_blank")}
              >
                <CiLocationArrow1 size="40" color="#FE4F2D"  />
              </div>
            </div>


            <div className="absolute  bottom-4 left-4  bg-[#FE4F2D] text-[#FDFBEE]  w-10 h-10 flex  items-center justify-center rounded-full ">{index+1}</div>
            <div className="relative z-10 flex  text-[#FE4F2D] p-2 font-bold text-xl">
              {project}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
