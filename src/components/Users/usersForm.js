import React, { useRef, useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import "./usersForm.css";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/authReducer";

const HandlingUrlData = async (url, data) => {
  try {
    const result = await axios.post(url, data);
    // console.log("result", result);
    if (result.status === 200) {
      return result;
    }
    return null;
  } catch (error) {
    // console.log("error", error);
    alert(error.message);
    return;
  }
};

const UsersForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const inputConfirmPassRef = useRef();
  const dispatch = useDispatch();
  // const histroy = useHistory();

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
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBwPK-3FcqO64_z8KE_TOY-luwAxohwB4";
      const result = await HandlingUrlData(url, {
        ...obj,
        returnSecureToken: true,
      });
      if (result) {
        alert("User logged successfuly");
        dispatch(authAction.loggin(result.data.idToken));
        // histroy.replace("/");
      }
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBwPK-3FcqO64_z8KE_TOY-luwAxohwB4";
      const result = await HandlingUrlData(url, {
        ...obj,
        returnSecureToken: true,
      });
      if (result) {
        alert("Account created successfuly");
      }
    }
  };

  return (
    <div className="Container">
      <div className="userDivContainer">
        <form className="userForm" onSubmit={formSubmitHandler}>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <input
            type="email"
            name="email"
            className="inputvalue"
            placeholder="email"
            autoComplete="new-email"
            ref={inputEmailRef}
            required
          />
          <input
            type="password"
            name="password"
            className="inputvalue"
            placeholder="password"
            autoComplete="new-password"
            ref={inputPasswordRef}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            className="inputvalue"
            placeholder="confirmPassword"
            autoComplete="new-password"
            ref={inputConfirmPassRef}
            required
          />
          <button type="submit" className="SubmitBtn">
            {isLogin ? "Login" : "creat Account"}
          </button>
          {isLogin && (
            <button className="forgetPass" onClick={props.OnclickFrogetPass}>
              Forget password ?
            </button>
          )}
        </form>
        <button
          type="submit"
          className="signupLoginBtn"
          onClick={switchAccountSignUpLogin}>
          {isLogin ? "creat an account: Sign Up" : "Have an account: Login"}
        </button>
      </div>
    </div>
  );
};

export default UsersForm;
