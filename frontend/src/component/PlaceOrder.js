import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/placeOrder.css";
import CheckoutSteps from "./CheckoutSteps";
function PlaceOrder() {
  const cart = useSelector((state) => state.cart);
  const { cartItem, shippingAddress, paymentMethod } = cart;
  let totalAmount = 0;
  cartItem.map((item) => {
    totalAmount = totalAmount + item.amount;
  });
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="placeOrder">
        <div className="left-order">
          <div className="shipping">
            <h2>Shipping</h2>
            <p>
              {shippingAddress.address}, {shippingAddress.city},{" "}
              {shippingAddress.country}, {shippingAddress.postalCode}
            </p>
          </div>
          <div className="products-placeOrder">
            {cartItem.map((product, index) => {
              const { image, name, item, amount } = product;
              return (
                <div className="item-order" key={index}>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                  <p>{item}</p>
                  <p>{amount}</p>
                </div>
              );
            })}
            <div className="totalAmount-order">
              <h2>Total Amount: ${totalAmount}</h2>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <h3>Pament Method:</h3>
            <p>{paymentMethod}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
