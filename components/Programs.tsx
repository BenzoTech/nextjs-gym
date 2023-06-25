import React from "react";
import { programsData } from "../data/programsData";
import Image from "next/image";

const Programs = () => {
  return (
    <div className="programs flex flex-col gap-8 px-8" id="programs">
      <div className="programs__header flex gap-20 font-bold text-[3rem] justify-center text-white uppercase italic">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs__categories flex gap-[1rem]">
        {programsData.map((program) => (
          <div className="category flex flex-col bg-gray-500 p-[2rem] gap-[1rem] text-white justify-between">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now flex items-center gap-[2rem]">
              <span>Join Now</span>
              <Image src='/rightArrow.png' alt="right-arrow" width={20} height={20}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
