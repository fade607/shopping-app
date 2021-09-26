import React from "react";
import { Link } from "react-router-dom";
import "../css/checkoutSteps.css";
function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <div className="checkOut">
      {step1 ? (
        <Link to="/login" className="checkOut-link">
          Login
        </Link>
      ) : (
        <p>login</p>
      )}
      {step2 ? (
        <Link to="/shipping" className="checkOut-link">
          Shipping
        </Link>
      ) : (
        <p>Shipping</p>
      )}
      {step3 ? (
        <Link to="/payment" className="checkOut-link">
          Payment
        </Link>
      ) : (
        <p>Payment</p>
      )}
      {step4 ? (
        <Link to="/placeorder" className="checkOut-link">
          Place Order
        </Link>
      ) : (
        <p>Place Order</p>
      )}
    </div>
  );
}

export default CheckoutSteps;
