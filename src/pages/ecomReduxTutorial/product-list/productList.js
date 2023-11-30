import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../../components/card/card";
import "./productList.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cart/cart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      {products?.map((ele) => (
        <Card
          key={ele.id}
          title={ele.title}
          img={ele.thumbnail}
          price={ele.price}
          navigate={() => navigate(`/${ele.id}`)}
          addToCart={() => dispatch(addToCart(ele))}
        />
      ))}
    </div>
  );
};

export default ProductList;
