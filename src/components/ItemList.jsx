import React, { useState } from 'react';

const ItemList = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Apples', description: 'Fresh apples from the local market', quantity: 5, price: '$10' },
        { id: 2, name: 'Milk', description: '1 gallon of organic milk', quantity: 1, price: '$4' },
        { id: 3, name: 'Bread', description: 'Whole wheat bread loaf', quantity: 2, price: '$3' },
        { id: 4, name: 'Eggs', description: 'Organic free-range eggs', quantity: 12, price: '$5' }
    ]);

    const addItem = () => {
        const newItem = { id: items.length + 1, name: 'New Item', description: 'Description', quantity: 0, price: '$0' };
        setItems([...items, newItem]);
    };

    const editItem = (id, updatedItem) => {
        const updatedItems = items.map(item => (item.id === id ? updatedItem : item));
        setItems(updatedItems);
    };

    const deleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Map through items and display each item */}
            {items.map(item => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>
                        <span className="text-sm text-gray-500">{item.price}</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <button onClick={() => editItem(item.id, { ...item, quantity: item.quantity + 1 })}>Increase Quantity</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>
                </div>
            ))}
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <button onClick={addItem}>Add New Item</button>
            </div>
        </div>
    );
};

export default ItemList;
