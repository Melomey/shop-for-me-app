import React, { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-swift-reveal";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Login(props) {

  return (
   
    <div class="h-screen bg-[#FFF1DA] flex justify-center items-center w-full">
        
        <form method='POST' action='#'>
            <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
                <div class="space-y-4">
                    <h1 class="text-center text-2xl font-semibold text-gray-600">Login</h1>
                    <hr/>
                <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input class="pl-2 outline-none border-none w-full" type="email" name="email" value="" placeholder="Email" required/>

                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input class="pl-2 outline-none border-none w-full" type="password" name="password" id="" placeholder="Password" required/>
                    
                </div>
                </div>
               
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <input type="checkbox" id="rememberMeCheckbox" name="rememberMe" class="mr-2"/>
                        <span class="text-xs font-semibold">Remember me?</span>
                    </p>
                </div>
                <Link to='/UserProfile'>
                <button type="submit" value="login" id="login" class="mt-6 w-full shadow-xl bg-[#F2AA4C] hover:bg-[#e2b56d] hover:text-black text-black py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button></Link>
                <hr/>
                <div class="flex justify-center items-center mt-4">
                    <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                        <span class="ml-2">You don't have an account?<Link to="/register" class="text-xs ml-2 text-blue-500 font-semibold">Register now &rarr;</Link>
                        </span>
                    </p>
                </div>
            </div>
            <div class="pt-6 text-base font-semibold leading-7">
                <p class="font-sans text-red-500 text-md hover:text-red-800">
                <Link to="/" class="absolute">&larr; Home</Link>
                </p>
                
      <img src="/fettis/confetti2.svg" alt="" className="absolute w-20 h-20 top-80 right-96"/>
    
      <img src="/fettis/confetti4.svg" alt="" className="absolute w-80 h-20 top-10 right-12"/>
      <img src="/fettis/confetti5.svg" alt="" className="absolute w-20 h-20 top-20 left-52"/>
      <img src="/fettis/confetti6.svg" alt="" className="absolute w-20 h-20 bottom-32 left-80"/>
      <img src="/fettis/confetti7.svg" alt="" className="absolute w-20 h-20 bottom-20 left-80"/>
            </div>
        </form>
    </div>

  );
}

export default Login;
