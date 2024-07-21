import React from "react";
import "./ProductSideBar.css";
import {
  Category,
  Materials1,
  Materials2,
  Colors,
  Price,
} from "../../assets/asset";
import Filters from "../Filters/Filters";

const ProductSideBar = () => {
  return (
    <>
      <div className="first-section1">
        <Filters data={Category} title="Category" />
        <Filters data={Materials1} title="Seating Materials" />
        <div className="none-display">
          <Filters data={Materials2} title="Frame Materials" />
        </div>
        <Filters data={Colors} title="Colors" />
        <Filters data={Price} title="Price" />
      </div>
    </>
  );
};

export default ProductSideBar;
