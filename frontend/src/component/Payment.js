import React, { useEffect, useState } from "react";
import "../css/payment.css";
import { useDispatch, useSelector } from "react-redux";
import { history } from "history";
import CheckoutSteps from "./CheckoutSteps";
import { savePaymentMethod } from "../redux/action/cartAction";

function Payment({ history }) {
  const cart = useSelector((state) => state.cart);
  const { paymentMethod } = cart;

  const { shippingAddress } = cart;
  const [payment, setPayment] = useState("paypal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(payment));
    history.push("/placeOrder");
  };
  if (!shippingAddress) {
    history.push("/shipping");
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <form onSubmit={submitHandler} className="payment-form">
        <img src="../images/payment.png" alt="payment" />
        <label>Selct Payment Method</label>
        <label>
          <input
            type="radio"
            name="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
          Paypal Or Cretid Card
        </label>
        <button type="submit" className="btn">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Payment;
