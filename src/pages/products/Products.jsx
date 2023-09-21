import React, { useEffect, useState } from "react";
import { fetchProductList } from "../../common/globalFunction";
import { useAtom } from "jotai";
import { ProductList } from "../../store/store";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

const Products = () => {
  const [getProductList, setProductList] = useAtom(ProductList);
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProductList(setProductList, setLoading);
  }, []);

  useEffect(() => {
    setFilterData(getProductList);
  }, [getProductList]);

  function handleSearch(event, value) {
    if (event.key === "Enter") {
      let result = getProductList.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      setFilterData(result);
    }
  }
  function handleSelectChange(value) {
    if (value === "Select") {
      setFilterData(getProductList);
    } else {
      let result = getProductList.filter((item) => item.category === value);
      setFilterData(result);
    }
  }
  function getCategories() {
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
        <div className="flex flex-col h-screen justify-center items-center">
          <div id="actionHeader" className="m-10">
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
