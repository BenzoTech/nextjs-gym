"use client";
import React from "react";
import Header from "./Header";
import Image from "next/image";
import { motion } from "framer-motion";


const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero__blur"></div>
      <div className="hero__left">
        <Header />
        <div className="hero__ad">
          <motion.div
            initial={{ left: mobile ? "178" : "238" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero__text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your dream to the fullest
            </span>
          </div>
        </div>
        <div className="hero__figures flex gap-5">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+928</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero__buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero__right relative">
        <button className="btn absolute right-3 top-2 text-black rounded-[8px]">
          Join Now
        </button>
        <motion.div
          initial={{ right: "-1rem" }}
          transition={transition}
          whileInView={{ right: "4rem" }}
          className="hero__heart-rate flex flex-col gap-3 p-6 justify-center items-center"
        >
          <span>Heart Rate</span>
          <Image src="/heart.png" alt="heart" width={28} height={20} />
          <span>116 bpm</span>
        </motion.div>
        <Image
          src="/hero_image.png"
          alt="hero img"
          width={650}
          height={30}
          className="hero-image absolute top-[10rem] right-[8rem] z-10"
        />
        <Image
          src="/hero_image_back.png"
          alt="hero img"
          width={240}
          height={30}
          className="hero-image-back absolute top-[8rem] right-[15rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
