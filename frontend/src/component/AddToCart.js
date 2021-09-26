import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { history } from "history";
import { useDispatch, useSelector } from "react-redux";
import { addToCartItem } from "../redux/action/cartAction";
import "../css/cart.css";

function AddToCart({ product, history }) {
  const dispatch = useDispatch();
  const { id, name, image, price, countInStock } = product;

  const [item, setItem] = useState(1);
  const amount = item * price;

  const inStock = [];
  const addToCartHandler = () => {
    dispatch(addToCartItem({ item, amount, id, name, image }));
  };

  {
    for (var i = 1; i < countInStock; i++) {
      inStock.push(i);
    }
  }
  console.log(typeof inStock);
  return (
    <div className="add_to_cart">
      <h3>All Amount: ${amount}</h3>
      <div>
        <h3> Quantity:</h3>
        <select
          onChange={(e) => {
            setItem(e.target.value);
          }}
        >
          {inStock.map((number, index) => {
            return (
              <option key={index} value={number}>
                {number}
              </option>
            );
          })}
        </select>
      </div>
      <Link to="/cart" onClick={addToCartHandler} className="btn">
        ADD TO CART
      </Link>
    </div>
  );
}

export default AddToCart;
