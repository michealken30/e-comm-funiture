import React from "react";
import "./RightCheckout.css";

const RightCheckout = () => {
  return (
    <div>
      <div className="card">
        <div className="border-line">
          <div className="flex-div1">
            <span className="order-detail">Order Details</span>
            <div className="color">
              <span>Update Cart</span>

              <span class="health-style"> &gt;</span>
            </div>
          </div>
          <div className="first-section first-section2">
            <div className="img-div img-div2">
              <img src="./Image6.png" alt="" />
            </div>
            <div className="text-div">
              <span className="big-font big-font2">
                LuxeComfort Sectional Sofa
              </span>
              <span className="medium-font med-font2">
                1 Seater Sofa (Sand Beige)
              </span>
              <span className="big-font big-font2">$3500</span>
              <span className="medium-font med-font2">Quantity:1</span>
              <span className="small-font sm-font">+Delivery fee $20</span>
            </div>
          </div>
        </div>
        <div className="sub-total">
          <span>Delivery Fee:</span>
          <span>$20</span>
        </div>
        <div className="sub-total">
          <span>Subtotal:</span>
          <span>$3500</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>$3520</span>
        </div>

        <button className="checkout">Continue to checkout</button>
      </div>
    </div>
  );
};

export default RightCheckout;
