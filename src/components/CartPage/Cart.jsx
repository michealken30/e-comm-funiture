import React from "react";
import LeftCart from "../LeftSectionCart/LeftCart";
import RightCart from "../RightSessionCart/RightCart";
import "./Cart.css";
import {
  useAddToCart,
  useLoadCartData,
  useRemoveFromCart,
} from "../../Api/CartApi.js";
import { useGetFurniture } from "../../Api/furnituresApi.js";

const Cart = () => {
  const { addCart, isLoading } = useAddToCart();
  const { removeItemCart } = useRemoveFromCart();
  const { products, refetch } = useGetFurniture();
  const { mycartData } = useLoadCartData();
  return (
    <div className="">
      <div className="two-section media-display">
        <LeftCart
          addCart={addCart}
          removeItemCart={removeItemCart}
          mycartData={mycartData}
          products={products}
        />
        <RightCart />
      </div>
    </div>
  );
};

export default Cart;
