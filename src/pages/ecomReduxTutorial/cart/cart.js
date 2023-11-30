import React from "react";
import { useSelector } from "react-redux";
import "./cart.css";
import emptyCart from "../../../assets/empty_cart.svg";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="table-container">
      <h3>Shopping Cart</h3>
      {cart.length > 0 ? (
        <table className="table">
          <tr>
            <th className="table-head">Product</th>
            <th className="table-head">Title</th>
            <th className="table-head">Quantity</th>
          </tr>
          {cart.map((ele) => (
            <tr key={ele.id} className="table-row">
              <td>
                <img
                  src={ele.thumbnail}
                  className="cart-image"
                  alt={ele?.title}
                />
              </td>
              <td>{ele.title}</td>
              <td>1</td>
            </tr>
          ))}
        </table>
      ) : (
        <img src={emptyCart} alt="empty-Cart" className="cart-image-empty" />
      )}
    </div>
  );
};

export default Cart;
