import React from "react";
import ProductListItem from "./product-list-item";

const productlisting = props => {
  return (
    <div>
      {props.products.map(product => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default productlisting;
