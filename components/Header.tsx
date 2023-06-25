"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header ">
      <Image src="/logo.png" alt="logo" width={140} height={80} />
      {menuOpen === false && mobile === true ? (
        <div>
          <Image src="/bars.png" alt="bars" width={40} height={30} className="mt-1" onClick={()=>setMenuOpen(true)}/>
        </div>
      ) : (
        <ul className="header__menu">
          <li onClick={() => setMenuOpen(false)}><Link href='#home' scroll={false}>Home</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link href='#programs'>Programs</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link href='#reasons'>Why Us</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link href='#plans'>Plans</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link href='#testimonials'>Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
