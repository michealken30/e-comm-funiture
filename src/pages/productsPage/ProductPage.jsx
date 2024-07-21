import React from "react";
import ProductSideBar from "../../components/ProductSideBar/ProductSideBar";
import ProductMain from "../../components/ProductMain/ProductMain";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="app">
      <div class="container product-cont">
        <p className="product-style">
          Home <span class="health-style"> &gt;</span>Funiture
          <span class="health-style"> &gt;</span> sofa
        </p>
      </div>
      <div className="two-sections1">
        <ProductSideBar />
        <ProductMain />
      </div>
    </div>
  );
};

export default ProductPage;
