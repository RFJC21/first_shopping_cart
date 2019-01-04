import React from "react";

import classes from "./button.css";

const button = props => (
  <button
    className={classes.Button}
    onClick={() => props.addToCart(props.product)}
  >
    Add to cart ({(props.cartItem && props.cartItem.quantity) || 0})
  </button>
);

export default button;
