import React from "react";
import { Link } from "react-router-dom";

const BecomeAShopper = () => {
  return (
    <div>
      <div class="bg-[url('/src/assets/bas-bg.jpg')]  min-h-screen flex flex-col justify-center items-center h-screen w-auto">
        <div class="bg-white rounded-lg   p-8 max-w-md">
          <h1 class="text-4xl font-bold text-center text-orangeOne mb-8">
           Become a shopper
          </h1>

          <div>
           <Link to='/shopperSignin' > <button class="w-full bg-orangeOne hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
              Sign In
            </button>
            </Link>
            <Link to='/shopperRegister'>
            <button class="w-full bg-orangeOne hover:bg-teal-500 text-white font-bold mt-5 py-2 px-4 rounded-lg">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAShopper;
