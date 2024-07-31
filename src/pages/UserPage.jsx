import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import LoginPop from "../components/Login/LoginPop";
import { useCreateMyUserRequest, useLoginUserRequest } from "../Api/MyUserApi";

const UserPage = () => {
  const {
    createUser,
    isLoading: creatingLoading,
    isSuccess,
  } = useCreateMyUserRequest();
  const {
    loginUser,
    isLoading: LoginLoading,
    isSuccess: LoginSuccess,
  } = useLoginUserRequest();

  const { showLogin, setShowLogin, currentState, setCurrentState } =
    useContext(StoreContext);

  return (
    <div>
      {showLogin ? (
        <LoginPop
          setShowLogin={setShowLogin}
          onSave={currentState === "Sign up" ? createUser : loginUser}
          isLoading={LoginLoading || creatingLoading}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserPage;
