import React from "react";
import { connect } from "react-redux";

import ProductListItem from "./product-list-item";
import classes from "../product-listing/product-list-item.css";
import * as actionTypes from "../cart/actions";
import cartItemsWithQuantity from "../cart/index";

const productlisting = props => {
  return (
    <div className={classes.ProductListing}>
      {props.products.map(product => (
        <ProductListItem
          product={product}
          key={product.id}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch({ type: actionTypes.Add, payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: actionTypes.REMOVE, payload: item });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(productlisting);
