import React, { useState } from 'react';
import './App.css';

const MENU_ITEMS = {
  Biryani: ['Chicken Biryani', 'Mutton Biryani', 'Veg Biryani'],
  Curries: ['Butter Chicken', 'Palak Paneer', 'Chana Masala'],
  Pizzas: ['Margherita', 'Pepperoni', 'BBQ Chicken'],
  Starters: ['Paneer Tikka', 'Chicken 65', 'Spring Rolls']
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rajinikanth DevOps Kitchen</h1>
        <div className="Menu-categories">
          {Object.keys(MENU_ITEMS).map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="Menu-items">
          {selectedCategory && MENU_ITEMS[selectedCategory].map(item => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
