import axios from "axios";
import { useQuery } from "react-query";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

export const useGetFurniture = () => {
  const GetFurniture = async () => {
    try {
      const response = await axios.get(`${API_BASE_URI}/api/furniture/list`);

      return response.data.furnitures;
    } catch (error) {
      throw new Error(response?.data?.message || "Can't get Furnitures");
    }
  };

  const {
    data: products = [],
    isLoading,
    refetch,
    isSuccess,
  } = useQuery("fetchFurniture", GetFurniture);

  return {
    products,
    isLoading,
    refetch,
    isSuccess,
  };
};

export const useSearchFurniture = (filters) => {
  console.log(filters);
  const searchFurniture = async () => {
    try {
      const response = await axios.get(`${API_BASE_URI}/api/furniture/search`, {
        params: filters,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(
        error?.response?.data?.message || "Failed to search furniture"
      );
    }
  };

  const {
    data: products = [],
    isLoading,
    refetch,
    isSuccess,
  } = useQuery(["searchFurniture", filters], searchFurniture, {
    enabled: !!filters,
  });

  return { products, isLoading, refetch, isSuccess };
};
