import React, { useState } from "react";

function Item({ name, category }) {
const [isInCart, setInCart] = useState(true)
function handleClick(){
  setInCart(!isInCart)
}

const classLable = isInCart? "Add To Cart" : "in-cart"


  return (
    <li className={classLable}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={handleClick} className="add">{classLable}</button>
    </li>
  );
}

export default Item;
