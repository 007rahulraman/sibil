import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../../common/globalFunction";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loader from "../../components/Loader";
const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetchProductDetails(id, setProductDetails, setLoading);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div
          id="productDetails"
          className="flex h-screen justify-center items-center"
        >
          <div
            id="container"
            className="w-[80%] h-[70%] mx-16 bg-orange-400 rounded-lg flex"
          >
            <section className="flex-1 h-full flex items-center overflow-clip">
              <div className="p-20 mt-20">
                <Carousel>
                  {productDetails.images.map((image, index) => (
                    <img src={image} alt={image + 1} />
                  ))}
                </Carousel>
              </div>
            </section>
            <section className="flex-1"></section>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
