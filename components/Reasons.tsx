import React from "react";
import Image from "next/image";

const Reasons = () => {
  return (
    <div className="reasons px-[2rem] flex" id="reasons">
      <div className="reasons__left">
        <Image src="/image1.png" alt="image-1" width={150} height={60} />
        <Image src="/image2.png" alt="image-2" width={300} height={30} />
        <Image src="/image3.png" alt="image-3" width={300} height={30} />
        <Image src="/image4.png" alt="image-4" width={300} height={30} />
      </div>
      <div className="reasons__right uppercase gap-[1rem] flex flex-col">
        <span>some reasons</span>
        <div className="text-white text-[3rem] font-bold">
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>
        <div className="reasons__details flex flex-col gap-[1rem] text-white">
          <div>
            <Image src="/tick.png" alt="tick" width={30} height={30} />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <Image src="/tick.png" alt="tick" width={30} height={30} />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <Image src="/tick.png" alt="tick" width={30} height={30} />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <Image src="/tick.png" alt="tick" width={30} height={30} />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners flex gap-[1rem]">
            <Image src='/nb.png' alt="nb" width={30} height={30}/>
            <Image src='/adidas.png' alt="adidas" width={30} height={30}/>
            <Image src='/nike.png' alt="nike" width={30} height={30}/>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
