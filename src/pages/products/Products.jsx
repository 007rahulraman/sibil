import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProductList } from "../../common/globalFunction";
import { useAtom } from "jotai";
import { ProductList } from "../../store/store";

const Products = () => {
  const [getProductList, setProductList] = useAtom(ProductList);
  useEffect(() => {
    fetchProductList(setProductList);
  }, []);
  // console.log(getProductList);
  return (
    <div className="text-black">
      {getProductList.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <p>{product.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
