import React from "react";
import "../css/sidbar.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import CloseIcon from "@material-ui/icons/Close";

function Sidbar() {
  return (
    <div className="sidbar">
      <nav className="sidbar_content">
        <div>
          <span>
            <ShoppingCartIcon />
          </span>
          CART
        </div>
        <div>
          <span>
            <PersonIcon />
          </span>
          SIGN IN
        </div>
      </nav>
    </div>
  );
}

export default Sidbar;
