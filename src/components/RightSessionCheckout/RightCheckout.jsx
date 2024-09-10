import React, { useContext } from "react";
import "./RightCheckout.css";
import { useGetFurniture } from "../../Api/furnituresApi";
import { StoreContext } from "../../Context/StoreContext";
import { Link } from "react-router-dom";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

const RightCheckout = () => {
  const { products, refetch } = useGetFurniture();

  const { data, setData, setDeliveryAddress, cartItems } =
    useContext(StoreContext);

  const calculateSubtotal = () => {
    return Object.entries(cartItems).reduce((acc, [id, quantity]) => {
      const product = products.find((product) => product._id === id);
      if (product) {
        return acc + product.newPrice * quantity;
      }
      return acc;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = 20;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    const orderDetails = {
      items: cartItems,
      amount: total,
      address: {
        street: data.street || "Ikeja Keystone block",
        city: data.city || "Benin-City",
        state: data.state || "Lagos",
        country: data.country || "Nigeria",
      },
    };

    placeOrder(orderDetails);
  };

  return (
    <div>
      <div className="card">
        <div className="border-line">
          <div className="flex-div1">
            <span className="order-detail">Order Details</span>
            <div className="color">
              <Link to="/cart" className="color">
                Update Cart
              </Link>
              <span className="health-style"> &gt;</span>
            </div>
          </div>

          {Object.entries(cartItems).map(([id, quantity]) => {
            const cartProduct = products.find((product) => product._id === id);

            if (cartProduct) {
              return (
                <div key={id} className="first-section first-section2">
                  <div className="img-div img-div2">
                    <img
                      src={`${API_BASE_URI}/images/${cartProduct.image}`}
                      alt={cartProduct.name}
                    />
                  </div>
                  <div className="text-div">
                    <span className="big-font big-font2">
                      {cartProduct.name}
                    </span>
                    <span className="medium-font med-font2">
                      {cartProduct.short}
                    </span>
                    <span className="big-font big-font2">
                      ${cartProduct.newPrice * quantity}
                    </span>
                    <span className="medium-font med-font2">
                      Quantity: {quantity}
                    </span>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="sub-total">
          <span>Delivery Fee:</span>
          <span>${deliveryFee}</span>
        </div>
        <div className="sub-total">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="checkout">Continue to Payment</button>
      </div>
    </div>
  );
};

export default RightCheckout;
