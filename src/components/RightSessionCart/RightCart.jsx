import React, { useContext, useEffect, useState } from "react";
import "./Rightcart.css";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard, FaPaypal, FaStripe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const RightCart = () => {
  const { getTotalCartAmount, cartItems } = useContext(StoreContext);
  const [totalAmount, setTotalAmount] = useState(0);

  const totalItems =
    Object.keys(cartItems).length > 0
      ? Object.values(cartItems).reduce((total, qty) => total + qty, 0)
      : 0;

  useEffect(() => {
    const fetchTotalAmount = async () => {
      const amount = await getTotalCartAmount();
      setTotalAmount(amount || 0);
    };

    fetchTotalAmount();
  }, [getTotalCartAmount, cartItems]);

  return (
    <div>
      <div className="card">
        <div className="order-sum">
          <span>Order Summary</span>
          <span>
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
        <div className="charges">
          <span>Delivery charges:</span>
          <span className="max-width">
            Enter your delivery address at checkout to view delivery costs.
          </span>
        </div>
        <div className="sub-total">
          <span>Subtotal:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <p className="exclude-charges">Excluding Delivery charges</p>
        <Link to="/checkout">
          <button className="checkout">Continue to checkout</button>
        </Link>
        <div className="flex-payment">
          <span className="pay-text"> We accept:</span>
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
        </div>
        <span>All transactions are 100% safe and secure</span>
      </div>
    </div>
  );
};

export default RightCart;
