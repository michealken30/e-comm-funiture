import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import LoginPop from "../components/Login/LoginPop";
import { useCreateMyUserRequest, useLoginUserRequest } from "../Api/MyUserApi";
import toast from "react-hot-toast";

const UserPage = () => {
  const {
    createUser,
    isLoading: creatingLoading,
    isSuccess: isCreatingSuccess,
    error: createError,
  } = useCreateMyUserRequest();

  const {
    loginUser,
    isLoading: LoginLoading,
    isSuccess: LoginSuccess,
    error: LoginError,
  } = useLoginUserRequest();

  const {
    showLogin,
    setShowLogin,
    currentState,

    setToken,
  } = useContext(StoreContext);

  const isSuccess = isCreatingSuccess || LoginSuccess;
  const error = createError || LoginError;

  const handleLoginOrSignup = async (data, action) => {
    try {
      const response = await action(data);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      setShowLogin(false);
      toast.success(response.message);
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <div>
      {showLogin ? (
        <LoginPop
          setShowLogin={setShowLogin}
          onSave={(data) =>
            currentState === "Sign up"
              ? handleLoginOrSignup(data, createUser)
              : handleLoginOrSignup(data, loginUser)
          }
          isLoading={LoginLoading || creatingLoading}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserPage;
