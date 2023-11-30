import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div>
        <img
          src={props.img}
          className="image"
          alt=""
          onClick={props.navigate}
        />
        <div className="card-content">
          <p className="product-name">{props.title}</p>
          <p className="product-price">price: {props.price}</p>
        </div>
        <div>
          <button onClick={props.addToCart} className="btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
