import React from 'react';

const ReviewsContent = () => {
  const reviews = [
    {
      name: "Michael Johnson",
      rating: 4.5,
      review: "Samuel was incredibly efficient and polite. He delivered my package promptly and with a smile."
    },
    {
      name: "Emily Thompson",
      rating: 5,
      review: "Samuel went above and beyond to make sure my delivery arrived on time. His professionalism and friendliness were greatly appreciated."
    },
    {
      name: "David Lee",
      rating: 4,
      review: "Samuel's service was satisfactory. The delivery was on time, but there was a small issue with the packaging."
    },
    {
      name: "Sarah Garcia",
      rating: 4.8,
      review: "Samuel provided excellent service. He was courteous and efficient. I would highly recommend him."
    },
    {
      name: "Daniel Smith",
      rating: 3.5,
      review: "Samuel was a bit late with the delivery, but he was apologetic and handled the situation professionally."
    },
    {
      name: "Jennifer Brown",
      rating: 4.2,
      review: "Samuel's delivery service was good overall. However, there was a minor mix-up with the address that caused a delay."
    },
    {
      name: "Alex Nguyen",
      rating: 4.9,
      review: "Samuel provided exceptional service. The delivery was quick, and he even helped carry the package inside."
    },
    {
      name: "Emma Wilson",
      rating: 4.7,
      review: "Samuel was fantastic! He communicated well and delivered my package with care. I'm very satisfied with his service."
    },
    {
      name: "Christopher Taylor",
      rating: 3.9,
      review: "Samuel's delivery was a bit late, but he was polite and made up for it with his friendly attitude."
    },
    {
      name: "Olivia Martinez",
      rating: 5,
      review: "Samuel exceeded my expectations. He was punctual, professional, and made the delivery process seamless. Highly recommend!"
    }
];



  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mt-4">Shopper Reviews</h1>
      <div className="grid grid-cols-3 grid-rows-4 gap-5 mt-14">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-2">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-semibold">{review.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">&#9733;</span>
                  <span>{review.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsContent;
