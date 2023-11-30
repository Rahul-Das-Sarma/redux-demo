import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import ProductList from "./pages/ecomReduxTutorial/product-list/productList";
import ProductDetails from "./pages/productDetails/productDetails";
import Cart from "./pages/ecomReduxTutorial/cart/cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
