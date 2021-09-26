import {
  ADD_TO_CART,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  REMOVE_ITEM,
} from "../constants/cartContants";

export const removeItem = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem));
};

export const addToCartItem = (data) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: data,
  });

  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
