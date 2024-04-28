import React, { useState } from 'react';

const ViewItemListContent = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Groceries', location: 'Supermarket', description: 'Buy fruits, vegetables, and snacks' },
    { id: 2, title: 'Stationery', location: 'Office Supplies Store', description: 'Buy pens, notebooks, and sticky notes' },
    { id: 3, title: 'Hardware', location: 'Hardware Store', description: 'Buy screws, nails, and tools' },
  ]);
  const [selectedTask, setSelectedTask] = useState(null); // State to store selected task
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleSelectTask = (id) => {
    const selected = items.find(item => item.id === id);
    setSelectedTask(selected);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="container mt-10 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Manage Item List</h1>

        {/* Display list of items */}
        <div className="grid grid-cols-3 grid-rows-4 gap-5 mt-14">
          {items.map(item => (
            <div key={item.id} className="relative mb-4 p-4 border border-gray-300 rounded-md">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-600">Location: {item.location}</p>
              <p>{item.description}</p>
              <div className="flex justify-end mt-2">
                <button onClick={() => handleSelectTask(item.id)} className="px-4 py-2 bg-green-500 text-white rounded-md">Select Task</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup to display selected task */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-md">
            <h2 className="text-xl font-bold mb-4">{selectedTask.title}</h2>
            <p className="text-gray-600">Location: {selectedTask.location}</p>
            <p>{selectedTask.description}</p>
            <div className="flex justify-end mt-4">
              <button onClick={handleClosePopup} className="px-4 py-2 bg-green-500 text-white rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ViewItemListContent;
