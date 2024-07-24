import React, { useState } from "react";
import "./LoginPop.css";
import { useNavigate } from "react-router-dom";

const LoginPop = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [currentState, setCurrrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onLoginHandler = () => {
    navigate("/");
  };

  return (
    <div className="login-popup">
      <form
        onSubmit={onLoginHandler}
        action=""
        className="login-popup-container"
      >
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <p className="pop-off" onClick={() => setShowLogin(false)}>
            &times;
          </p>
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Name"
              required
            />
          )}

          <input
            type="text"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currentState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" required />
          <p>By continuing i agree to the term of use & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
