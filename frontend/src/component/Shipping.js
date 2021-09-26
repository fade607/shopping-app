import React, { useEffect, useState } from "react";
import "../css/shipping.css";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../redux/action/cartAction";
import history from "history";
import CheckoutSteps from "./CheckoutSteps";

function Shipping({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 />
      <div className="shipping_cart">
        <h1>SHIPPING</h1>
        <form onSubmit={submitHandler} className="shipping-form">
          <label>Address:</label>
          <input
            type="text"
            placeholder="Enter Your Address"
            value={address ? address : ""}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>City:</label>
          <input
            type="text"
            placeholder="Enter Your Ciy"
            value={city ? city : ""}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>Postal Code:</label>
          <input
            type="text"
            placeholder="Enter Your Postal Code"
            value={postalCode ? postalCode : ""}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <label>Coutry:</label>
          <input
            type="text"
            placeholder="Enter Your Coutry"
            value={country ? country : ""}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit" variant="primary" className="btn">
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Shipping;
