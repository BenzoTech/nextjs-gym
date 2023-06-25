"use client";

import React, { useState } from "react";
import { testimonialsData } from "../data/testimonialsData";
import { test } from "node:test";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials flex gap-[1rem] px-[2rem]" id="testimonials">
      <div className="testimonials__left">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[0].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="testimonials__right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <Image
          key={selected}
          src={testimonialsData[selected].image}
          alt="testimonial"
          width={200}
          height={30}
          className="z-10"
        />
        <div></div>
        <div></div>

        <div className="arrows flex gap-[1rem] absolute bottom-4 left-12">
          <Image
            src="/leftArrow.png"
            alt="arrow"
            width={30}
            height={30}
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <Image
            src="/rightArrow.png"
            alt="arrow"
            width={30}
            height={30}
            className="z-0"
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
