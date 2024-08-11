import axios from "axios";
import { useMutation } from "react-query";

export const useaddFurniture = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const addFurniture = async (data) => {
    try {
      const response = await axios.post(`/${API_URL}/api/furniture/add`, data);
      return response.data;
    } catch (error) {
      throw new Error(response?.data?.message || "Furniture added");
    }
  };

  const {
    mutateAsync: addProduct,
    isLoading,
    isError,
  } = useMutation(addFurniture);

  return {
    addProduct,
    isLoading,
    isError,
  };
};
