import React, { useState, useEffect } from "react";
import { history } from "history";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/action/userAction";
import "../css/login.css";
function Register({ history }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const [conformPassowrd, setConformPassowrd] = useState("");
  const dispatch = useDispatch();
  // const userRegister = useSelector((state) => state.userRegister);
  // const [error, loading, userInfo] = userRegister;
  const submitHandelr = (e) => {
    history.push("/login");
    dispatch(register(name, email, passowrd, conformPassowrd));
  };

  return (
    <div className="login-box">
      <img src=".././images/login.png" alt="" />
      <h2>Register</h2>
      <form onSubmit={submitHandelr}>
        <div className="user-box">
          <label>User Name:</label>
          <input type="text" value={name} onChange={(e) => setName()} />
        </div>
        <div className="user-box">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail()} />
        </div>
        <div className="user-box">
          <label>Enter Your Passowrd</label>
          <input
            type="passowrd"
            value={passowrd}
            onChange={(e) => setPassowrd()}
          />
        </div>
        <div className="user-box">
          <label>Conform Your Passowrd</label>
          <input
            type="passowrd"
            value={conformPassowrd}
            onChange={(e) => setConformPassowrd()}
          />
        </div>

        <button type="submit" className="login-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
