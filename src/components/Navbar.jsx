import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <nav className="bg-[rgb(30,30,30)] h-20 mx-14 flex justify-between items-center sticky top-0 z-20">
        <p className="font-mono p-6 text-xl">Rameshwar Zade</p>
        <div className="flex gap-7 cursor-pointer p-3">
          <Link className="hover:text-yellow-400 hover:border-b p-3"
           activeClass="active" to="Intro" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
          <Link className="hover:text-yellow-400 hover:border-b p-3"
          activeClass="active" to="About"  spy={true} smooth={true} offset={-100} duration={500}>
            About
          </Link>
          <Link
           
            className="hover:text-yellow-400 hover:border-b p-3"
            activeClass="active"  to="Skills"  spy={true} smooth={true} offset={-100} duration={500}
          >
            Skiills
          </Link>
          <Link className="hover:text-yellow-400 hover:border-b p-3"
            activeClass="active" to="portfolio"  spy={true} smooth={true} offset={-100} duration={500}>
            Portfolio
          </Link>
        </div>
        <div className="p-3">

        <button className="border-2 bg-slate-100 text-black rounded-lg p-3"
         onClick={()=>{
          document.getElementById("Contact").scrollIntoView({behavior:'smooth'})
         }}>
          Contact me
        </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
