import { createContext, useEffect, useState } from "react";
import { useGetFurniture } from "../../src/Api/furnituresApi.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentState, setCurrentState] = useState("Login");
  const [deliveryAddress, setDeliveryAddress] = useState(false);
  const [filters, setFilters] = useState({});
  const [cartItems, setCartItems] = useState({});
  const { products, refetch } = useGetFurniture();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const clearCartItems = () => {
    setCartItems({});
  };

  const saveToken = (userToken) => {
    if (token !== userToken) {
      localStorage.setItem("token", userToken);
      setToken(userToken);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await refetch();
    };

    fetchData();
  }, [refetch]);

  const getTotalCartAmount = async () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product._id === item);

        totalAmount += itemInfo.newPrice * cartItems[item];
      }
    }

    return totalAmount;
  };

  console.log(data);

  const contextValue = {
    showLogin,
    setShowLogin,
    currentState,
    setCurrentState,
    token,
    setToken,
    filters,
    setFilters,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    saveToken,
    clearCartItems,
    data,
    setData,
    deliveryAddress,
    setDeliveryAddress,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
