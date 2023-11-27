// ShoppingList.js
import React, { useState } from 'react';
import Item from './Item';

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h2>Shopping List</h2>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        {/* Add more category options as needed */}
      </select>

      <ul>
        {filteredItems.map((item) => (
          <Item key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
