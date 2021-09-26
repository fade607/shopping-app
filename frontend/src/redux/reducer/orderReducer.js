import {
  ORDER_CREATE_FIAL,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
} from "../constants/orderConants";

export const order = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, oder: action.payload };
    case ORDER_CREATE_FIAL:
      return { error: true };
    default:
      return state;
  }
};
