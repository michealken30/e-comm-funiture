import React from "react";
import "./Checkout.css";
import CheckoutComp from "../../components/CheckoutComp/CheckoutComp";

const Checkout = () => {
  return (
    <div>
      <p className="product-style app media-p">
        Home<span class="health-style"> &gt;</span> Furniture{" "}
        <span class="health-style"> &gt;</span> Sofa{" "}
        <span class="health-style"> &gt;</span> LuxeComfort Sectional Sofa
        <span class="health-style"> &gt;</span> Cart
        <span class="health-style"> &gt;</span> Checkout
      </p>
      <CheckoutComp />
    </div>
  );
};

export default Checkout;
