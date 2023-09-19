import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../common/globalFunction";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchProductDetails(id, setProductDetails);
  }, []);
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>{productDetails.title}</p>
    </div>
  );
};

export default ProductDetails;
