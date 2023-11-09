import React from "react";
import {logo} from "../images";
import Link from "./Link";

const Navbar = () => {
 return (
  <header>
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="easybank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
          <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}><Link href="/home">Home</Link></li>
          <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}><Link href="/features">Features</Link></li>
          <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}><Link href="/transactions">Transactions</Link></li>
          <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}><Link href="/blog">Blog</Link></li>
          <li className={`font-poppins font-normal cursor-pointer text-[16px]`}><Link href="/accounts">Accounts</Link></li>
      </ul>
    </nav>
  </header>
    
  );
};

export default Navbar;