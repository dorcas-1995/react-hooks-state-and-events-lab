import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const cartClass = inCart ? "in-cart" : ""

  function handleCartClick(){
    setInCart(!inCart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" :"add"} onClick={handleCartClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
