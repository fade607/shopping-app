import {
  ADD_TO_CART,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
  REMOVE_ITEM,
} from "../constants/cartContants";

export const cartReducer = (
  state = { cartItem: [], shippingAddress: {}, paymentMethod: "" },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, item, amount, image, name } = action.payload;

      const tempItem = state.cartItem.find((i) => i.id === id);
      if (tempItem) {
        const tempCart = state.cartItem.map((cartIT) => {
          if (cartIT.id === id) {
            let newAmount = cartIT.amount + amount;
            let newItems = parseInt(cartIT.item) + parseInt(item);
            return { ...cartIT, amount: newAmount, item: parseInt(newItems) };
          } else {
            return cartIT;
          }
        });
        return { ...state, cartItem: tempCart };
      } else {
        const newItem = {
          id: id,
          item: item,
          amount: amount,
          image: image,
          name: name,
        };
        return { ...state, cartItem: [...state.cartItem, newItem] };
      }

    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case REMOVE_ITEM:
      const tempCart = state.cartItem.filter(
        (oneItem) => oneItem.id !== action.payload
      );
      return { ...state, cartItem: tempCart };
    default:
      return state;
  }
};
