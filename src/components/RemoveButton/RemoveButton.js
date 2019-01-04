import React from "react";

import classes from "./RemoveButton.css";

const removeButton = props => (
  <button
    className={classes.Button}
    onClick={() => props.removeFromCart(props.cartItem)}
  >
    Remove from cart
  </button>
);

export default removeButton;
