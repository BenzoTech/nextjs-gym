import React from "react";
import { plansData } from "../data/plansData";
import Image from "next/image";

const Plans = () => {
  return (
    <div className="plans__container mt-[-4rem] px-[2rem] flex flex-col relative" id="plans">
      <div className="blur plans__hero-1"></div>
      <div className="blur plans__hero-2"></div>
      <div className="programs__header flex gap-10 font-bold text-[3rem] justify-center text-white uppercase italic mb-10">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* plans card */}
      <div className="plans flex items-center justify-center gap-[4rem]">
        {plansData.map((plan, i) => (
          <div className="plan flex flex-col text-white gap-[2rem] p-[1.5rem]" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
                {plan.features.map((feature, i) => (
                    <div className="feature">
                        <Image src='/whiteTick.png' alt="white-tick" width={30} height={30}/>
                        <span key={i}>{feature}</span>
                    </div>
                ))}
            </div>
            <div><span>see more benefits -></span></div>
            <button className="btn text-black">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
