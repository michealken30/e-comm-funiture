import React from "react";
import "./LeftCart.css";
import { AiOutlineDelete } from "react-icons/ai";

const LeftCart = () => {
  return (
    <div>
      <div className="card-div">
        <div className="first-section">
          <div className="img-div">
            <img src="./Image6.png" alt="" />
            <div className="img-flex">
              <span>
                <AiOutlineDelete />
              </span>
              <span>REMOVE</span>
            </div>
          </div>
          <div className="text-div">
            <span className="big-font">LuxeComfort Sectional Sofa</span>
            <span className="medium-font">1 Seater Sofa (Sand Beige)</span>
            <span className="small-font">In Stock</span>
          </div>
        </div>
        {/* <div className="section-two"> */}
        <div>
          <button className="add-button">
            <a href="">-</a>
            <span>1</span>
            <a href="">+</a>
          </button>
        </div>
        <div className="price">
          <span className="new-price">$1568</span>
          <span>
            <del className="old-price">$2000</del>
          </span>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LeftCart;
