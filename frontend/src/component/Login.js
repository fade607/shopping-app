import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/userAction";
import { Link } from "react-router-dom";
import "../css/login.css";

function Login({ location, history }) {
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    // if (userInfo) {
    //   history.push(redirect);
    // }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, passowrd));
  };

  return (
    <div className="login-box">
      <img src=".././images/login.png" alt="" />
      <h2>Login</h2>

      <form onSubmit={submitHandler}>
        <div className="user-box">
          <label>User Name:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="user-box">
          <label>Passowrd:</label>
          <input
            type="passowrd"
            value={passowrd}
            onChange={(e) => {
              setPassowrd(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="login-btn">
          LOGIN
        </button>
        <div>
          <p>Now Customer?</p>
          <Link to="/register" className="register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
