import React from "react";
//import data from "../data/products.json";

const ProductListItem = props => {
  console.log("erro", props);
  return (
    <div>
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
      />

      <div>{props.product.description}</div>
      <div>{props.product.price}$</div>
      <div>{props.product.id}</div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductListItem;
