import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headername">
        <h1 className="header1">CRYPTO</h1>
        <h1 className="header2"> CURRENCY</h1>
      </div>
      <div className="headerlinks">
        <p>Home</p>
        <p
          onClick={() => {
            navigate("/news");
          }}
        >
          News
        </p>
        <p>Top Cryptos</p>
      </div>
    </div>
  );
}

export default Header;
