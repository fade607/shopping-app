import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import "../css/products.css";
import { fetchProducts } from "../redux/action/productsAction";
import Loading from "./Loading";
import Error from "./Error";
import FilterList from "../component/FilterList";
function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => {
    return state.productList;
  });

  const { loading, error, products } = productList;
  console.log(error);
  if (loading) {
    <Loading />;
  }
  if (error) {
    <Error />;
  }
  // const { products, loading, error } = productList;
  // console.log(loading);
  //console.log(products);
  //console.log(error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  //const products = [];
  return (
    <div className="products">
      <div className="filter_list">
        <FilterList />
      </div>
      <div className="products_list">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Products;
