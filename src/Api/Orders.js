import axios from "axios";
import { useContext } from "react";
import { useMutation } from "react-query";
import { StoreContext } from "../Context/StoreContext";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

export const usePlaceOrder = () => {
  const { token, setCartItems, cartItems } = useContext(StoreContext);

  const placeToOrder = async (orders) => {
    try {
      if (token) {
        const response = await axios.post(
          `${API_BASE_URI}/api/order/place`,
          { orders },
          { headers: { token } }
        );
        return response.data;
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error placing order");
    }
  };

  const {
    mutateAsync: placeOrder,
    isLoading,
    error,
    isSuccess,
  } = useMutation(placeToOrder);

  return {
    placeOrder,
    isLoading,
    error,
    isSuccess,
  };
};

export const useVerifyOrder = () => {
  const verifyToOrder = async (success, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error placing order");
    }
  };

  const {
    mutateAsync: verifyOrder,
    isLoading,
    error,
    isSuccess,
  } = useMutation(verifyToOrder);

  return {
    verifyOrder,
    isLoading,
    error,
    isSuccess,
  };
};
