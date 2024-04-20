import React from "react";

const Services = () => {
  return (
<>
<div className="bg-[#b0e8d0] text-center">
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
            className="relative w-40 h-40 rounded"
            src="data:image/jpeg;base64,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"
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
            src="data:image/jpeg;base64,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"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjTd2kT3SM6EWQjbsxBF1V1FjmutIB1MXkrgdE29e8msoVX8dnGlYGF_CHlvwwboUglc&usqp=CAU"
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
