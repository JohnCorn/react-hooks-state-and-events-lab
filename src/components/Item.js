import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, toggleCart] = useState(false);

  function handleCartClick()
  {
    toggleCart((toggleCart) => {
        toggleCart = !toggleCart;
        console.log(`toggleCart:`, toggleCart);
        return toggleCart;
      });
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
      className={isInCart ? "remove" : "add"}
      onClick={handleCartClick} 
      >{isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
