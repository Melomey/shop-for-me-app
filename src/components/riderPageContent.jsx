// Import React
import React from "react";

// Define the rider page content component
const RiderPageContent = () => {
  // Define riders data
  const riders = [
    {
      name: "Alice Smith",
      role: "Shopper 1",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Provide a real image link here
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
    {
      name: "Bob Johnson",
      role: "Shopper 2",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
    {
      name: "Charlie Brown",
      role: "Shopper 3",
      image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
    {
      name: "Diana Garcia",
      role: "Shopper 4",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
    {
      name: "Eva Martinez",
      role: "Shopper 5",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-4 gap-5 mt-14 ">
        {riders.map((rider, index) => {
          return (
            <div key={index} className="w-full max-w-sm bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4">
                {/* "Add Review" button with blue background color */}
                <button
                  className="inline-block text-white dark:text-black bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  {rider.addButtonLabel}
                </button>
              </div>
              <div className="flex flex-col items-center pb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={rider.image}
                    alt={rider.name}
                  />
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {rider.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {rider.role}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// Export the rider page content component
export default RiderPageContent;
