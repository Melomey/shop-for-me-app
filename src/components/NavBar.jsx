import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";


const NavBar = () => {

  const currentUser= {
    id:1,
    username:"John Doe",
    
  }
  return (
    <nav className=" py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src={logo} alt="" className="text-black w-48 font-bold text-2xl"/>
        <div>
        <button
           
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            How It Works
          </button>
          <button
           
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Services
          </button>
          <Link to='/login'>
          <button
          
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Login
          </button>
          </Link>

          <Link to='/register'>
          <button
            
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Sign Up
          </button>
          </Link>
          <Link to='/BecomeAShopper'>
          <button
           
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black px-3 py-1 mr-4 hover:bg-[#F2AA4C] hover:text-white rounded"
          >
            Become a shopper
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
