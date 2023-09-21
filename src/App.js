import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetail/ProductDetails";
import PageNotFound from "./pages/NotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* Redirect to /products by default */}
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/not-found" element={<Navigate to="/not-found" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
