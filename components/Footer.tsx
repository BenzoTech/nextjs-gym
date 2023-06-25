import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="blur footer__blur-1"></div>
      <div className="blur footer__blur-"></div>
      <hr />
      <div className="footer">
        <div className="social-links">
          <Image src="/github.png" alt="github" width={30} height={30} />
          <Image src="/instagram.png" alt="instagram" width={30} height={30} />
          <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
        </div>
      </div>
      <div className="footer-logo">
        <Image src="/logo.png" alt="logo" width={200} height={30} />
      </div>
    </div>
  );
};

export default Footer;
