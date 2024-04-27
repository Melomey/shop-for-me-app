import React from 'react';

const ReviewsContent = () => {
  const reviews = [
    {
      name: "John Doe",
      rating: 4.5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet enim nec justo convallis sodales."
    },
    {
      name: "Jane Smith",
      rating: 5,
      review: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra."
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
