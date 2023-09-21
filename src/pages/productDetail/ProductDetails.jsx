import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductDetails } from "../../common/globalFunction";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loader from "../../components/Loader";
import CustomButton from "../../components/CustomButton";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  const [itemCount, setItemCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchProductDetails(id, setProductDetails, setLoading, navigate);
  }, []);

  function handleButtonClick(type) {
    if (type === "increment") {
      if (itemCount < productDetails.stock) setItemCount(itemCount + 1);
    } else {
      if (itemCount > 0) setItemCount(itemCount - 1);
    }
  }
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div
          id="productDetails"
          className="flex flex-col h-screen justify-center items-center "
        >
          <div className="flex justify-start w-[80%]">
            <button className="mb-4" onClick={() => navigate("/products")}>
              ← Back
            </button>
          </div>

          <div
            id="container"
            className="w-[80%] h-[80%] mx-16 bg-[#f5f7fa] rounded-lg flex"
          >
            <section className="flex-1 h-full flex items-center p-8 overflow-clip mr-16">
              <div className="rounded-xl ">
                <Carousel
                  showThumbs={false}
                  autoPlay={true}
                  interval={2000}
                  infiniteLoop={true}
                >
                  {productDetails.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={image + index}
                      className="object-contain w-[80%] h-full"
                    />
                  ))}
                </Carousel>
              </div>
            </section>
            <section className="flex-1 p-10">
              <span className="bg-white p-1 px-3 rounded-xl uppercase">
                {productDetails.category}
              </span>
              <br />

              <h1 className="text-4xl font-bold mt-8 flex items-center">
                {productDetails.title}{" "}
              </h1>

              <span className="bg-green-600 rounded-lg text-white p-1 ">
                {productDetails.rating} ★
              </span>
              <span className="bg-slate-700 ml-2 rounded-lg text-white p-1 my-2">
                {productDetails.brand}
              </span>
              <div className="mt-10" id="priceContainer">
                <p className="text-sm text-slate-600">PRICE</p>
                <p className="text-5xl text-green-600">
                  $ {productDetails.price}
                </p>
                <p className="mt-2">
                  <span className="text-sm text-slate-600">DISCOUNT </span>
                  <br />
                  <span className="text-green-600">
                    {productDetails.discountPercentage}% off
                  </span>
                </p>
              </div>
              <div className="mt-10" id="DescriptionContainer">
                <p className="text-sm text-slate-600 ">DESCRIPTION</p>
                <p className="text-xl text-slate-600">
                  {productDetails.description}
                </p>
              </div>
              <div id="quantity" className="flex flex-col mt-6">
                <p className="text-sm text-slate-600 ">QUANTITY</p>
                <div className="flex items-center mt-2">
                  <CustomButton
                    content={"-"}
                    handleClick={handleButtonClick}
                    type={"decrement"}
                    borderType={"full"}
                  />
                  <p className="px-4 text-2xl w-20 flex justify-center">
                    {itemCount}
                  </p>
                  <CustomButton
                    content={"+"}
                    handleClick={handleButtonClick}
                    type={"increment"}
                    borderType={"full"}
                  />
                </div>
                <div id="buyButton" className="mt-10">
                  <CustomButton content={"BUY"} />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
