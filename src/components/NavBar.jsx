import React from "react";
import logo from "../assets/logo.png"


const NavBar = () => {
  return (
    <nav className=" py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src={logo} alt="" className="text-black w-48 font-bold text-2xl"/>
        <div>
        <a
            href="#"
            className="text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Services
          </a>
          <a
            href="#"
            className="text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Login
          </a>
          <a
            href="#"
            className="text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Become a shopper
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
