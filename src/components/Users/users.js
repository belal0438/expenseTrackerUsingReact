import React, { useRef, useState } from "react";
import axios from "axios";
import "./users.css";

const HandlingUrlData = async (url, data) => {
  try {
    const result = await axios.post(url, data);
    // console.log("result", result);
    if (result.status === 200) {
      alert("Account Craeted successfully");
      return result.data;
    } else {
      throw new Error("Authencation failed");
    }
  } catch (error) {
    // console.log("error", error);
    alert(error.message);
    return;
  }
};

const Users = () => {
  const [isLogin, setIsLogin] = useState(true);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPassRef = useRef();

  const switchAccountSignUpLogin = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = async (eve) => {
    eve.preventDefault();
    const obj = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      confirmPass: inputConfirmPassRef.current.value,
    };
    // console.log(obj);
    let url;
    if (isLogin) {
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBwPK-3FcqO64_z8KE_TOY-luwAxohwB4";

      await HandlingUrlData(url, { ...obj, returnSecureToken: true });
    }
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <input
          type="email"
          name="email"
          placeholder="email"
          autoComplete="new-email"
          ref={inputEmailRef}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="new-password"
          ref={inputPasswordRef}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
          autoComplete="new-password"
          ref={inputConfirmPassRef}
          required
        />
        <button type="submit">{isLogin ? "Login" : "creat Account"}</button>
      </form>
      <button
        type="submit"
        className="signupLoginBtn"
        onClick={switchAccountSignUpLogin}>
        {isLogin ? "creat an account: Sign Up" : "Have an account: Login"}
      </button>
    </div>
  );
};

export default Users;
