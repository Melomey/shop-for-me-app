import React from "react";
import Groceries from "../assets/Groceries-1.png"
import Pharmacy from "../assets/pharmacy.png"
import Supplies from "../assets/household.png"

const Services = () => {
  return (
<>
<div className="bg-[#b0e8d0] text-center " id='services'>
<h2 className="text-4xl text-black font-bold pt-10">Services</h2>
    <div className="p-10 flex flex-wrap items-center justify-center ">
      
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#F2AA4C] rounded-lg max-w-xs shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: "0.1" }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: "0.2",
            }}
          ></div>
          <img
            className="relative w-70 h-40 rounded"
            src={Groceries}
            alt=""
          />
        </div>
        <div className="relative text-black px-6 pb-6 mt-6">
          <span className="block font-semibold text-xl opacity-75 -mb-1">Groceries Shopping</span>
          <div className="flex justify-between">
            <span className="block ">Let our errand runners pick up your groceries,..</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#F2AA4C] rounded-lg max-w-xs shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: "0.1" }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: "0.2",
            }}
          ></div>
          <img
            className="relative w-40 h-40 rounded"
            src={Pharmacy}
            alt=""
          />
        </div>
        <div className="relative text-black px-6 pb-6 mt-6">
          <span className="block opacity-75 text-xl font-semibold -mb-1">Pharmacy Runs</span>
          <div className="flex justify-between">
            <span className="block  ">Have medications or health essentials delivered to you.</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#F2AA4C] rounded-lg max-w-xs shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: "0.1" }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: "0.2",
            }}
          ></div>
          <img
            className="relative w-40 h-40 rounded"
            src={Supplies}
            alt=""
          />
        </div>
        <div className="relative text-black px-6 pb-6 mt-6">
          <span className="block opacity-75 text-xl font-semibold -mb-1">Household Supplies</span>
          <div className="flex justify-between">
            <span className="block">From cleaning products to kitchen essentials,... </span>
          </div>
        </div>
      </div>
    </div>
</div>
    </>
  );
};

export default Services;
