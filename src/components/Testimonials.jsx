import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-#4CCD99 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "I hired Big D to get some household items and deliver some goods as well. D was great with communication, was fast, professional and did a fantastic job. He even came back to thank me when was around the neighbourhood."
          </p>
          <p className="text-gray-600 font-semibold">Big D'angelo</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            justo sit amet mauris mollis finibus et eu augue."
          </p>
          <p className="text-gray-600 font-semibold">John Doe</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            justo sit amet mauris mollis finibus et eu augue."
          </p>
          <p className="text-gray-600 font-semibold">John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
