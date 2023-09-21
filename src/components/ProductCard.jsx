import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ data }) => {
  const { id, title, price, brand, images, rating, discountPercentage } = data;
  return (
    <Link to={`/products/${id}`}>
      <div
        id="productCard"
        className="rounded-xl flex border-2 border-slate-500 overflow-clip cursor-pointer"
      >
        <div id="imageContainer" className="w-56 h-52 overflow-hidden flex-1">
          <img
            src={images[0]}
            alt="Thumbnail"
            className="w-full h-full object-contain bg-white p-4 transform
          transition duration-1000 hover:scale-125 "
          />
        </div>
        <div id="productDetails" className="p-3 w-full flex-2 my-auto">
          <h1 className="text-xl font-bold">{title}</h1>
          <span className="bg-green-600 rounded-lg text-white p-1">
            {rating} ★
          </span>
          <br />
          <p>Brand: {brand}</p>
          <p className="text-2xl mt-3">${price}</p>
          <p className="text-green-600 ">{discountPercentage}% off</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
