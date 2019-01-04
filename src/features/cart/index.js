import React from "react";
import { connect } from "react-redux";
import { Add, REMOVE, ALL } from "./actions";

const sort = items => {
  return items.sort((a, b) => a.id < b.id);
};

const Cart = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => props.addToCart(item)}>+</button>
            </td>

            <td>
              <button onClick={() => props.removeFromCart(item)}>-</button>
            </td>
            <button onClick={() => props.removeAllFromCart(item)}>
              Remove all from cart
            </button>
          </tr>
        ))}
      </tbody>
    </table>
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
      dispatch({ type: Add, payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: REMOVE, payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: ALL, payload: item });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
