import React, { useEffect, useState } from "react";
import { fetchProductList } from "../../common/globalFunction";
import { useAtom } from "jotai";
import { ProductList } from "../../store/store";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

const Products = () => {
  const [getProductList, setProductList] = useAtom(ProductList); //using atom to access the store and setting value in the ProductList state
  const [filterData, setFilterData] = useState([]); // created state to store the searched output without affecting the original data
  const [searchValue, setSearchValue] = useState(""); //state to store the input value which is being entered by the user
  const [loading, setLoading] = useState(true); //state to wait for API call to finish to show loading animation until the api request is finished.

  useEffect(() => {
    //Using useEffect hook to run this block of code when this page open, and make api call.
    fetchProductList(setProductList, setLoading);
  }, []);

  useEffect(() => {
    setFilterData(getProductList); // storing the fetched product list from the api and storing in the search field data.
  }, [getProductList]);

  function handleSearch(event, value) {
    //this function finds the products which are entered in the search field.
    if (event.key === "Enter") {
      let result = getProductList.filter(
        (item) =>
          item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) //using filter method to get the products which match to the search field value
      );
      setFilterData(result); // after we get he filtered data , we set the value to filterData state to update in the UI.
    }
  }
  function handleSelectChange(value) {
    //this function help in filtering the categories to which the product belongs
    if (value === "Select") {
      setFilterData(getProductList); //if the value of the select tag is Select then we need to set the list to the original product list.
    } else {
      let result = getProductList.filter((item) => item.category === value); //once we select a particular category, we need to filter the product which belong to the particular category
      setFilterData(result); // after getting the filtered result we set the state to update in the UI
    }
  }
  function getCategories() {
    // function to get the categories present inside our product list.
    let categories = getProductList.map((item) => item.category);
    return [...new Set(categories)];
  }
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col h-screen justify-center items-center overflow-scroll">
          <div id="actionHeader" className="m-10 ">
            <h1 className="text-3xl text-center font-bold">Products</h1>
            <div className="flex gap-2 mt-4">
              <div className="flex items-center border-2 border-slate-700 rounded-md px-2 h-10">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => handleSearch(e)}
                  placeholder="Search"
                  className="focus:outline-none focus:ring-0"
                />
                <p
                  onClick={() => handleSearch({ key: "Enter" })}
                  className="cursor-pointer"
                >
                  🔎
                </p>
              </div>
              <div
                id="selectCategory"
                className="flex items-center border-2 border-slate-700 rounded-md px-2 h-10"
              >
                <select
                  className="w-full focus:outline-none focus:ring-0"
                  onChange={(e) => handleSelectChange(e.target.value)}
                >
                  <option value={"Select"}>Select</option>
                  {getCategories().map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="text-black grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-16">
            {filterData.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
