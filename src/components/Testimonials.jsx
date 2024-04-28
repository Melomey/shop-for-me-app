import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-#4CCD99 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Reviews</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "I hired Big D to get some household items and deliver some goods as well. D was great with communication, was fast, professional and did a fantastic job. He even came back to thank me when he was around the neighborhood."
          </p>
          <p className="text-gray-600 font-semibold">Big D'angelo</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "John Doe helped me with my car trouble. He arrived promptly, diagnosed the issue, and fixed it efficiently. Not only did he provide excellent service, but he also took the time to explain what went wrong and how to prevent it in the future. I highly recommend his services."
          </p>
          <p className="text-gray-600 font-semibold">John Doe</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            "I recently used Samantha's delivery service to send a package to my friend overseas. She ensured timely delivery, handled the packaging with care, and provided excellent customer service throughout the process. I'm very satisfied with her service."
          </p>
          <p className="text-gray-600 font-semibold">Samantha Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
