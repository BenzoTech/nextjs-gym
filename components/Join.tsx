'use client'

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = () => {
    

    
  };
  return (
    <div className="join flex px-8 gap-[10rem]" id="join-us">
      <div className="join__left">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="join__right">
        <form className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Enter your email adress"
          />
          <button className="btn join-btn">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
