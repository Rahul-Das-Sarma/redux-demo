import React from "react";
import { FaShoppingCart, FaRegUser } from "react-icons/fa";
import "./header.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    <div className="header">
      <span className="title-ecom" onClick={() => navigate("/")}>
        E-Commerce
      </span>
      <div className="icon-container">
        <div className="cart-container" onClick={() => navigate("/cart")}>
          <FaShoppingCart />
          <div className="cart-counter">
            <span>{cart.length}</span>
          </div>
        </div>
        <FaRegUser />
      </div>
    </div>
  );
}

export default Header;
