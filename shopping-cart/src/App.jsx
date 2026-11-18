import "./App.css";
import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem.jsx";
function App() {
  // Test data - Do not modify
  const items = [
    { id: 1, name: "T-shirt", price: 20, onSale: true },
    { id: 2, name: "Jeans", price: 50, onSale: false },
    { id: 3, name: "Socks", price: 5, onSale: true },
    { id: 4, name: "Hat", price: 15, onSale: false },
    { id: 5, name: "Shoes", price: 65, onSale: true },
  ];
  const [onSale, setOnSale] = useState(false);
  const filteredItems = onSale
    ? items.filter((item) => item.onSale === true)
    : items;
  // Your code here
  return (
    <div>
      <button
        style={{
          border: "0",
          color: "white",
          borderRadius: "10px",
          background: "blue",
          padding: "10px 20px",
          fontSize: "24px",
        }}
        onClick={() => {
          setOnSale(!onSale);
        }}
      >
        {onSale ? "All Items" : "Sales Items Only"}
      </button>
      <ul>
        {filteredItems.map((item, key) => (
          <li key={item.id}>
            {item.name}
            <br />
            {item.price}
            <br />
            {item.onSale ? "OnSale" : "Out Of Sale"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
