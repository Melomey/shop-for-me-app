import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-swift-reveal";

import motorImage from "../assets/scooter.png";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row bg-white py-16 h-screen items-center">
      <div className="lg:w-1/2 px-6 lg:px-12 text-center lg:text-left">
        <h1 className="text-6xl w-full text-black font-bold mb-10">
          Get Your Errands Done{" "}
          <span className="text-deepGreen">Effortlessly.</span>
        </h1>
        <p className="text-2xl  text-black mb-8  tracking-wide leading-relaxed">
          Let someone take care of your shopping needs while you relax.
        </p>
        <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300bg-[#F2A846] text-black py-2 px-6 rounded-full font-semibold hover:bg-[#007F73] hover:text-black mb-6 lg:mb-0">
          Get Started
        </button>
      </div>
      <div className="lg:w-1/2 px-6 lg:px-12 flex justify-center items-center">
        {" "}
        <Fade right duration={1000} delay={500} distance="100px">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src={motorImage} alt="Motor" className=" " />
          </motion.div>
        </Fade>
      </div>
      <img src="/fettis/confetti1.svg" alt="" className="absolute w-20 h-20 top-20 left-52"/>
      <img src="/fettis/confetti2.svg" alt="" className="absolute w-20 h-20 top-40 right-96"/>
      {/* <img src="/fettis/confetti3.svg" alt="" className="absolute w-20 h-20 top-60 right-6"/> */}
      <img src="/fettis/confetti4.svg" alt="" className="absolute w-20 h-20 top-60 right-6"/>
      {/* <img src="/fettis/confetti5.svg" alt="" className="absolute w-20 h-20 bottom-48 right-52"/> */}
      <img src="/fettis/confetti6.svg" alt="" className="absolute w-20 h-20 bottom-32 left-80"/>
      <img src="/fettis/confetti7.svg" alt="" className="absolute w-20 h-20 bottom-20 left-80"/>
    </div>
  );
};

export default HeroSection;
