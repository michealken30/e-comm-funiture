import React from "react";
import "./Rightcart.css";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RightCart = () => {
  return (
    <div>
      <div className="card">
        <div className="order-sum">
          <span>Order Summary</span>
          <span>4 item</span>
        </div>
        <div className="charges">
          <span>Delivery charges:</span>
          <span className="max-width">
            Enter your delivery address at checkout to view delivery costs.
          </span>
        </div>
        <div className="sub-total">
          <span>Subtotal:</span>
          <span>$3500</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>$3500</span>
        </div>
        <p className="exclude-charges">Excluding Delivery charges</p>
        <Link to="/checkout">
          <button className="checkout">Continue to checkout</button>
        </Link>
        <div className="flex-payment">
          <span className="pay-text"> We accept:</span>
          {/* <span className="payment"> */}
          <span>
            <RiVisaLine />
          </span>
          <span>
            <FaCcMastercard />
          </span>
          <FaPaypal />
          <span>
            <FaStripe />
          </span>
          {/* </span> */}
        </div>
        <span>All transactions are 100% safe and secure </span>
      </div>
    </div>
  );
};

export default RightCart;
