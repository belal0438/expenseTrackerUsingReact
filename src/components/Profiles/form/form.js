import React, { useRef, useContext, useEffect } from "react";
import "./form.css";
import AuthContext from "../../../store/auth-context";
import axios from "axios";

const HandleUserDetailFormAPi = async (data) => {
  try {
    const result = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBBwPK-3FcqO64_z8KE_TOY-luwAxohwB4",
      data
    );

    console.log("resultUserDetail", result);
  } catch (error) {
    console.log("errorOnUserDetail", error);
  }
};

const Form = () => {
  const inputNameRef = useRef();
  const inputImageUrlRef = useRef();
  const AuthCtxt = useContext(AuthContext);
  const idToken = AuthCtxt.token;
  const userDetailFormSubmitHandler = async (eve) => {
    eve.preventDefault();
    const obj = {
      displayName: inputNameRef.current.value,
      photoUrl: inputImageUrlRef.current.value,
      returnSecureToken: true,
    };
    // console.log("objValue", obj);
    await HandleUserDetailFormAPi({ idToken, ...obj });
  };

  useEffect(() => {
    const fecthUserData = async () => {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBBwPK-3FcqO64_z8KE_TOY-luwAxohwB4",
        { idToken }
      );
      //   console.log("response", response.data.users);
      inputNameRef.current.value = `${response.data.users[0].displayName}`;
      inputImageUrlRef.current.value = `${response.data.users[0].photoUrl}`;
    };
    fecthUserData();
  }, [idToken]);

  return (
    <>
      <form className="DetailForm" onSubmit={userDetailFormSubmitHandler}>
        <ul>
          <li>
            <h3>Contact Details</h3>
          </li>
          <li>
            <button className="CnacelBtn">Cancel</button>
          </li>
        </ul>
        <ul>
          <li>
            <label htmlFor="name">Full Name:</label>
            <input type="text" ref={inputNameRef} />
          </li>
          <li>
            <label htmlFor="photo">Profile Photo URL:</label>
            <input type="text" ref={inputImageUrlRef} />
          </li>
        </ul>
        <button className="UpdateBtn">Update</button>
      </form>
    </>
  );
};

export default Form;
