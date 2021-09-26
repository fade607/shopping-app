import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/cart.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeItem } from "../redux/action/cartAction";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;

  let totalAmount = 0;
  cartItem.map((item) => {
    totalAmount = totalAmount + item.amount;
  });
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      {cartItem.length === 0 ? (
        <div className="empty_cart">
          <h1>Your Cart It Is Empty</h1>
          <img src=".././images/shopping.png" alt="" />

          <Link to="/" className="btn">
            Shopping Now
          </Link>
        </div>
      ) : (
        <div className="cart">
          <div className="list_cart title">
            <h3>Photo</h3>
            <h3>Name</h3>
            <h3>Total Item</h3>
            <h3>Total Amount</h3>
          </div>

          <div>
            {cartItem.map((oneitem, index) => {
              const { id, image, name, item, amount } = oneitem;
              return (
                <div className="list_cart" key={index}>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                  <h4>{item}</h4>
                  <h4>{amount}</h4>

                  <button onClick={() => deleteItem(id)} className="btn-delete">
                    <DeleteIcon />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="card-cart">
            <div>
              <strong>Total Amount: ${totalAmount}</strong>
            </div>{" "}
            <Link to="/shipping" className="btn">
              PROCEED TO CHEKOUT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
