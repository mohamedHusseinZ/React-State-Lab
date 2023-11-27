// App.js
import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './components/Item.js';

const App = () => {
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark Mode Toggle Handler
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Sample data for items
  const items = [
    { id: 1, category: 'clothing' },
    { id: 2, category: 'electronics' },
    // Add more items as needed
  ];

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Shopping App</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

      <ShoppingList items={items} />
      {/* You can include other components here */}
    </div>
  );
};

export default App;
