import React from "react";
import data from "../../utils/collections.json";
import "./BestCollections.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const BestCollections = ({ title }) => {
  return (
    <section className="app">
      <div className="">
        <div className="r-head flexEndStart">
          <span className="text-bold bold2">{title}</span>
          <Link to="/products">
            <span className="primaryText media-view">View All</span>
          </Link>
        </div>

        <div className="flexCenter media-flex">
          {data.map((card, i) => (
            <Link to="/details/1" className="border">
              <div key={i} className="flexColStart r-card">
                <div>
                  <img src={card.image} alt="home" />
                </div>

                <div className="wishlist">
                  <span className="">{card.name}</span>
                  <CiHeart />
                </div>
                <span className="">{card.detail}</span>
                <span className="r-price">
                  <div className="old-price">
                    <span>$</span>
                    <span>
                      <del>{card.OldPrice}</del>
                    </span>
                  </div>

                  <div>
                    <span>$</span>

                    <span>{card.NewPrice}</span>
                  </div>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/products">
          <span className="primaryText view-all">View All</span>
        </Link>
      </div>
    </section>
  );
};

export default BestCollections;
