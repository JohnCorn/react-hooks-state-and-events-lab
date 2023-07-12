import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterType, filterItem] = useState("All");

  function handleItemSubmit(event)
  {
    filterItem((filterItem) => {
      filterItem = event.target.value;
      console.log(`filterItem:`, filterItem);
      return filterItem;
    });
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (filterType === "All") return true;

    return item.category === filterType;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleItemSubmit}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
