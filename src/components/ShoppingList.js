
import Item from "./Item";
import React, {useState} from "react";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("");

  //Event handler for updating the selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);

  };

  //Filter items
  const filteredItems = selectedCategory ? items.filter((item) => item.category === selectedCategory) : items;

  return (
    <div>
     <select onChange={handleCategoryChange} value={selectedCategory}>
      <option value="">All</option>
        
      {[...new Set(items.map((item) => item.category))].map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
     </select>

      {/* Display the filtered items */}
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;