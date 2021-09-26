import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h5>&copy;{new Date().getFullYear()}</h5>
      <span>This Project Created By FADE AHMAD</span>
    </footer>
  );
}

export default Footer;
