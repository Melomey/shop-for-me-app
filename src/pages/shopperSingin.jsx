import React, { useState } from 'react';
import logo from "../assets/rider-2.png";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Fade } from "react-swift-reveal";

const ShopperSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="h-screen bg-[#FFF1DA] flex justify-center items-center w-full">
      {/* Logo Section */}
      <div className="w-1/2">
        <Fade left duration={2000} delay={500} distance="100px">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src={logo} alt="Logo" className="mx-auto w-3/4" />
          </motion.div>
        </Fade>
      </div>

      <form onSubmit={handleLogin}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">Login</h1>
            <hr/>
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input className="pl-2 outline-none border-none w-full" type="email" name="email" value={email} placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input className="pl-2 outline-none border-none w-full" type="password" name="password" id="" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <input type="checkbox" id="rememberMeCheckbox" name="rememberMe" className="mr-2"/>
              <span className="text-xs font-semibold">Remember me?</span>
            </p>
          </div>
            <Link to='/shopperProfile'>
          <button type="submit" value="login" id="login" className="mt-6 w-full shadow-xl bg-[#F2AA4C] hover:bg-[#e2b56d] hover:text-black text-black py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
          </Link>
          <hr/>
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span className="ml-2">You don't have an account?<Link to="/shopperRegister" className="text-xs ml-2 text-blue-500 font-semibold">Register now &rarr;</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="pt-6 text-base font-semibold leading-7">
          <p className="font-sans text-red-500 text-md hover:text-red-800">
            <Link to="/" className="absolute">&larr; Home</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ShopperSignIn;
