import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentState, setCurrentState] = useState("Login");
  const [token, setToken] = useState("");

  const contextValue = {
    showLogin,
    setShowLogin,
    currentState,
    setCurrentState,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
