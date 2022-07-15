import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const onItemFormSubmit = (newItem) => {
    addItem(newItem);
  }

  const onSearchChange = (search) => {
    setSearch(search)
  }



  const itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;
      // if (item.name.includes(search)) return true;
      return item.category === selectedCategory;
    }).filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())});

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={onSearchChange}
        search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
