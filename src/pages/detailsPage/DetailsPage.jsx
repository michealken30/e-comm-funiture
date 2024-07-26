import React from "react";
import { Single } from "../../assets/asset";
import LeftDetailCard from "../../components/LeftDetailCard/LeftDetailCard";
import RightDetailCard from "../../components/RightDetailCard/RightDetailCard";
import "./Detail.css";
import BestCollections from "../../components/BestCollections/BestCollections";
import { Link } from "react-router-dom";

const DetailsPage = () => {
  return (
    <>
      <div className="app">
        <p className="product-style">
          <Link to="/" className="home-color">
            Home
          </Link>
          <span class="health-style"> &gt;</span> Furniture{" "}
          <span class="health-style"> &gt;</span> Sofa{" "}
          <span class="health-style"> &gt;</span> LuxeComfort Sectional Sofa
        </p>
        <div className="two-sections">
          <LeftDetailCard data={Single} />
          <RightDetailCard data={Single} />
        </div>
      </div>
      <BestCollections title="SIMILAR PRODUCTS" />
    </>
  );
};

export default DetailsPage;
