import React from "react";
import LeftCart from "../LeftSectionCart/LeftCart";
import RightCart from "../RightSessionCart/RightCart";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="">
      <div className="two-section media-display">
        <LeftCart />
        <RightCart />
      </div>
    </div>
  );
};

export default Cart;
