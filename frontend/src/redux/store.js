import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
import { productListReduser, singleProduct } from "./reducer/productsReducer";
import { order } from "./reducer/orderReducer";

const reducer = combineReducers({
  productList: productListReduser,
  singleProduct: singleProduct,
  cart: cartReducer,
  userLogin: userLoginReducer,
  order: order,
  userRegister: userRegisterReducer,
});

const CartItem = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippindAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const savePaymentMethod = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : " ";

const initialstate = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },

  cart: {
    cartItem: CartItem,
    shippingAddress: shippindAddressFromStorage,
    paymentMethod: savePaymentMethod,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
