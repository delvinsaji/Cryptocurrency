import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headername">
        <h1 className="header1">CRYPTO</h1>
        <h1 className="header2"> CURRENCY</h1>
      </div>
      <div className="headerlinks">
        <p>Home</p>
        <p>News</p>
        <p>Top Cryptos</p>
      </div>
    </div>
  );
}

export default Header;
