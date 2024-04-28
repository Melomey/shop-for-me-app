import React, { useState } from 'react';

const ItemListForm = ({ handleSubmit }) => {
  // State variables to store form data
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit({ title, location, description }); // Pass form data to parent component
    setTitle('');
    setLocation('');
    setDescription('');
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="mb-4">
        <form onSubmit={submitForm} className="space-y-4">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 mr-2 border border-gray-300 rounded-md"
          />
          <br/>
          <input
            type="text"
            name="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 mr-2 border border-gray-300 rounded-md"
          />
          <br/>
          <input
            type="field"
            name="description"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 mr-2 border border-gray-300 rounded-md"
          />
          <br/>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white flex item-center rounded-md">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default ItemListForm;
