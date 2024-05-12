
import React, {useState} from "react";

function Item({ name, category }) {

  //State variable to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart((prevInCart) => !prevInCart);

  };

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  const listItemClass = inCart ? "in-cart" : "";


  return (
    <li className={listItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/*Button to toggle item in/out of cart*/}
      <button className="add" onClick={handleCartToggle}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;