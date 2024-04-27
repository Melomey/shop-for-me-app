// Import React
import React from "react";

// Define the rider page content component
const RiderPageContent = () => {
  // Define dummy texts
  const dummyTexts = [
    {
      name: "Alice Smith",
      role: "Shopper 1",
      imageSrc: "https://www.freepik.com/free-ai-image/3d-illustration-teenager-with-funny-face-glasses_89262005.htm#query=avatar&position=6&from_view=keyword&track=sph&uuid=8c1b4fdf-ef17-4795-832e-921f927419df",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
    {
      name: "Bob Johnson",
      role: "Shopper 2",
      imageSrc: "https://via.placeholder.com/150",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
    {
      name: "Charlie Brown",
      role: "Shopper 3",
      imageSrc: "https://via.placeholder.com/150",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
    {
      name: "Diana Garcia",
      role: "Shopper 4",
      imageSrc: "https://via.placeholder.com/150",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
    {
      name: "Eva Martinez",
      role: "Shopper 5",
      imageSrc: "https://via.placeholder.com/150",
      addButtonLabel: "Add Review",
      messageButtonLabel: "Message",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-4 gap-5 mt-14 ">
        {dummyTexts.map((dummyText, index) => {
          return (
            <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4">
                {/* "Add Review" button with blue background color */}
                <button
                  className="inline-block text-white dark:text-black bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  {dummyText.addButtonLabel}
                </button>
              </div>
              <div className="flex flex-col items-center pb-10">
                <div className="flex justify-center">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt={dummyText.name}
                  />
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {dummyText.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {dummyText.role}
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
