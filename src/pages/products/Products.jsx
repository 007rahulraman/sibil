import React, { useEffect } from "react";
import { fetchProductList } from "../../common/globalFunction";
import { useAtom } from "jotai";
import { ProductList } from "../../store/store";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [getProductList, setProductList] = useAtom(ProductList);
  useEffect(() => {
    fetchProductList(setProductList);
  }, []);

  return (
    <div className="text-black grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-16">
      {getProductList.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
};

export default Products;
