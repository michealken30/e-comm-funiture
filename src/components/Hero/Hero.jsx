import React from "react";
import "./Hero.css";
import hero from "../../assets/hero2.png";

const Hero = () => {
  return (
    <div className="header">
      <img className="hero-img" src={hero} alt="" />
      <div className="header-content">
        <h2>What We Represent</h2>
        <div>
          <span>Quality Craftsmanship</span>
          <span className="media-service">Affordability</span>
          <span className="media-service">Modern Aesthetics</span>
          <span>Customer Satisfaction</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
