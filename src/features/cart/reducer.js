import * as actionTypes from "./actions";

//returns all the items that dont match the current item that we
//are trying to add
const cartWithoutItem = (cart, item) =>
  cart.filter(cartItem => cartItem.id !== item.id);

//just return an item
const itemInCart = (cart, item) =>
  cart.filter(cartItem => cartItem.id === item.id)[0];

const addTocart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [
        ...cartWithoutItem(cart, item),
        { ...cartItem, quantity: cartItem.quantity + 1 }
      ];
};

//if we have one, remove completely
//if it is not the case, just remove one of them
const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [
        ...cartWithoutItem(cart, item),
        { ...item, quantity: item.quantity - 1 }
      ];
};

const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)];
};

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Add:
      return addTocart(state, action.payload);

    case actionTypes.REMOVE:
      //the remove case is more complicated.
      //if we have 5 buzzs, we just want to take out the first on.
      //The method indexOf() is used for finding out the index of the
      //specified character or substring in a particular String.

      //the return give us all of the items except for the first
      //match
      return removeFromCart(state, action.payload);
    case actionTypes.ALL:
      return removeAllFromCart(state, action.payload);
  }
  return state;
};

export default cartReducer;
