import React, { useState } from "react";
import ProductSideBar from "../../components/ProductSideBar/ProductSideBar";
import ProductMain from "../../components/ProductMain/ProductMain";
import "./ProductPage.css";
import { Link } from "react-router-dom";
// import { useGetFurniture } from "../../Api/furnituresApi.js";

const ProductPage = () => {
  // const { products, refetch } = useGetFurniture();

  const [filters, setFilters] = useState({});
  return (
    <div className="app">
      <div class="container product-cont">
        <p className="product-style">
          <Link to="/" className="home-color">
            Home
          </Link>
          <span class="health-style"> &gt;</span>Funiture
          <span class="health-style"> &gt;</span> sofa
        </p>
      </div>
      <div className="two-sections1">
        <ProductSideBar setFilters={setFilters} />
        <ProductMain filters={filters} />
      </div>
    </div>
  );
};

export default ProductPage;
