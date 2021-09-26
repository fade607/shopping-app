import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import ReorderIcon from "@material-ui/icons/Reorder";
import Sidbar from "./Sidbar";
import CloseIcon from "@material-ui/icons/Close";
import { ListItem } from "@material-ui/core";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/">Proshop</Link>
          <form>
            <input type="text" />
            <button className="btn-search">Search</button>
          </form>
        </div>
        <div>
          <ul className="list-item">
            <Link to="/cart">
              <li>
                <ShoppingCartIcon /> Cart{" "}
              </li>
            </Link>
            <Link to="/login">
              {" "}
              <li>
                {" "}
                <PersonIcon /> Login
              </li>
            </Link>
          </ul>
        </div>
        <div className="icon">
          {sidebarOpen ? (
            <CloseIcon onClick={() => setSidebarOpen(false)} />
          ) : (
            <ReorderIcon onClick={() => setSidebarOpen(true)} />
          )}
        </div>
      </div>
      <ul
        className={`${sidebarOpen ? "show-list" : "list"}`}
        onClick={() => setSidebarOpen(false)}
      >
        <Link to="/cart">
          <li>
            {" "}
            <ShoppingCartIcon /> cart
          </li>
        </Link>

        <Link to="/login">
          <li>
            {" "}
            <PersonIcon /> login
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
