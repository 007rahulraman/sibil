import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetail/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        {/* Redirect to /products by default */}
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </div>
  );
}

export default App;
