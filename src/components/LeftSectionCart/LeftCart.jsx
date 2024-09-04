import React, { useEffect, useContext } from "react";
import "./LeftCart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { StoreContext } from "../../Context/StoreContext";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

const LeftCart = ({ addCart, removeItemCart, mycartData, products }) => {
  const { cartItems } = useContext(StoreContext);

  // Load the cart data when the component mounts
  useEffect(() => {
    const loadCartData = async () => {
      await mycartData(); // Fetch the cart data
    };
    loadCartData();
  }, [mycartData]);

  // Function to handle removing the item completely from the cart
  const handleRemoveAll = async (itemId) => {
    try {
      await removeItemCart(itemId); // Remove the item completely
      await mycartData(); // Reload the cart data after removal
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleIncrement = async (itemId) => {
    try {
      await addCart(itemId);
      await mycartData();
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleDecrement = async (itemId, quantity) => {
    try {
      if (quantity > 1) {
        await removeItemCart(itemId);
        await mycartData();
      } else {
        await handleRemoveAll(itemId);
      }
    } catch (error) {
      console.error("Error decrementing item in cart:", error);
    }
  };

  console.log(cartItems);
  console.log(products);
  return (
    <div>
      {products && Object.keys(cartItems).length > 0 && (
        <div className="card-div">
          {Object.entries(cartItems).map(([id, quantity]) => {
            const cartProduct = products.find((product) => product._id === id);
            console.log(cartProduct);

            if (cartProduct) {
              return (
                <div key={id} className="first-section">
                  <div className="img-div">
                    <img
                      src={`${API_BASE_URI}/images/${cartProduct.image}`}
                      alt={cartProduct.name}
                    />
                    <div className="img-flex">
                      <span>
                        <AiOutlineDelete />
                      </span>
                      <span
                        onClick={() => handleRemoveAll(cartProduct._id)}
                        style={{ cursor: "pointer" }}
                      >
                        REMOVE
                      </span>
                    </div>
                  </div>
                  <div className="text-div">
                    <span className="big-font">{cartProduct.name}</span>
                    <span className="medium-font">{cartProduct.short}</span>
                    <span className="small-font">In Stock</span>
                  </div>
                  <div>
                    <button className="add-button">
                      <a
                        href="#"
                        onClick={() =>
                          handleDecrement(cartProduct._id, quantity)
                        }
                      >
                        -
                      </a>
                      <span>{quantity}</span>
                      <a
                        href="#"
                        onClick={() => handleIncrement(cartProduct._id)}
                      >
                        +
                      </a>
                    </button>
                  </div>
                  <div className="price">
                    <span className="new-price">${cartProduct.newPrice}</span>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default LeftCart;
