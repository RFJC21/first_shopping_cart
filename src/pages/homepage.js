import React from "react";

//import Productlistitem from "../features/product-listing/product-list-item";
import data from "../data/products.json";
import Productlisting from "../features/product-listing";

console.log("erro", data);

const homepage = props => (
  <div>
    <h2>Homepage</h2>
    <Productlisting products={data.products} />
  </div>
);

export default homepage;
