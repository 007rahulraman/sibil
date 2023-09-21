import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetail/ProductDetails";
import PageNotFound from "./pages/NotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/products" element={<Products />} />{" "}
        {/* Redirect to /products by default */}
        <Route path="/products/:id" element={<ProductDetails />} />
        {/* Redirect to /products by default if use directly hit portal without any path*/}
        <Route path="/" element={<Navigate to="/products" />} />
        {/* Redirect to /PageNotFound  path if the url which is not defined by default*/}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
