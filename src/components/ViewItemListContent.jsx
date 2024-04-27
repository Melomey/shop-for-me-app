import React, { useState } from 'react';

const ViewItemListContent = () => {
  // Dummy list of items (title, location, description)
  const [items, setItems] = useState([
    { id: 1, title: 'Groceries', location: 'Supermarket', description: 'Buy fruits, vegetables, and snacks' },
    { id: 2, title: 'Stationery', location: 'Office Supplies Store', description: 'Buy pens, notebooks, and sticky notes' },
    { id: 3, title: 'Hardware', location: 'Hardware Store', description: 'Buy screws, nails, and tools' },
  ]);

  // State for the form
  const [formData, setFormData] = useState({ title: '', location: '', description: '' });

  // Function to handle form submission from ItemListForm
  const handleSubmit = (newItem) => {
    const existingItem = items.find(item => item.id === newItem.id);
    if (existingItem) {
      // Update existing item
      setItems(items.map(item => (item.id === newItem.id ? newItem : item)));
    } else {
      // Add new item
      setItems([...items, { id: Date.now(), ...newItem }]);
    }
  };

  // Function to delete an item from the list
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Function to edit an item from the list
  const editItem = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    if (itemToEdit) {
      setFormData(itemToEdit);
    }
  };

  const handleSelectTask = (id) => {
    // Handle select task logic here
    console.log(`Selected task with ID ${id}`);
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Manage Item List</h1>

        {/* Add ItemListForm component */}
        {/* <ItemListForm formData={formData} handleSubmit={handleSubmit} /> */}

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
    </>
  )
}

export default ViewItemListContent;
