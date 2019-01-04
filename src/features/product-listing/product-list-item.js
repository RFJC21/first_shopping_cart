import React from "react";

import classes from "./product-list-item.css";
import Button from "../../components/AddButton/button";
import RemoveButton from "../../components/RemoveButton/RemoveButton";

const ProductListItem = props => {
  return (
    <div className={classes.ProductItem}>
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name}
        alt="bob"
        src={`/products/${props.product.image}`}
      />

      <div>{props.product.description}</div>
      <div>{props.product.price}$</div>
      <div>{props.product.id}</div>
      <div>
        <Button
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
        {props.cartItem ? (
          <RemoveButton
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProductListItem;
