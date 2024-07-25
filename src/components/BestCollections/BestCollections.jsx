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
          {data.map((card) => (
            <Link
              to="/details/1"
              className="border2 "
              data-aos="fade-up"
              data-aos-delay={card.aosDelay}
            >
              <div key={card.id} className="flexColStart2 r-card2">
                <div>
                  <img src={card.image} alt="home" className="img-1" />
                </div>

                <div className="wishlist2">
                  <span className="name-span">{card.name}</span>
                  <CiHeart className="mt-left" />
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
