import React, { useEffect, useState } from "react";
import "./productDetails.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cart/cart";

function ProductDetails() {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const fetchProductDetails = () => {
    axios
      .get(`https://dummyjson.com/products${location.pathname}`)
      .then((res) => setProduct(res.data));
  };

  useEffect(() => {
    fetchProductDetails();
  }, [location.pathname]);

  return (
    <div className="details-container">
      <img src={product.thumbnail} className="details-image" alt="" />

      <div className="content">
        <p className="title">{product.title}</p>
        <p className="description"> {product.description}</p>
        <p className="price"> Price: {product.price}</p>
        <button className="btn" onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
