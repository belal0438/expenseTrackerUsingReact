import React, { useRef, useState } from "react";
import "./usersForm.css";
import axios from "axios";

const UserForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const inputEmailRef = useRef();
  const formSubmitHandler = async (eve) => {
    eve.preventDefault();
    try {
      setIsLoading(true);
      const result = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBBwPK-3FcqO64_z8KE_TOY-luwAxohwB4",
        {
          email: inputEmailRef.current.value,
          requestType: "PASSWORD_RESET",
        }
      );

      if (result.status === 200) {
        setIsLoading(false);
        alert("Email hase been sent");
        //   console.log("forgetPassResult", result);
      } else {
        throw new Error("Somthing went wrong");
      }
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
      //   console.log("Error while forget pass Email");
    }
  };
  return (
    <div className="Container">
      <div className="userDivContainer">
        <form className="userForm" onSubmit={formSubmitHandler}>
          <h3>Forget Password</h3>
          <span className="forgetPassSpan">
            Enter the email which you have registered
          </span>
          <input
            type="email"
            name="email"
            className="inputvalue"
            placeholder="email"
            autoComplete="new-email"
            ref={inputEmailRef}
            required
          />

          {isLoading && <p>sending email...</p>}

          <button type="submit" className="SubmitBtn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForgetPassword;
