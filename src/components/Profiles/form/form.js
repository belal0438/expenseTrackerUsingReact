import React, { useRef, useEffect } from "react";
import "./form.css";
import axios from "axios";
import { useSelector } from "react-redux";

const HandleUserDetailFormAPi = async (data) => {
  try {
    const result = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBBwPK-3FcqO64_z8KE_TOY-luwAxohwB4",
      data
    );

    console.log("resultUserDetail", result);
  } catch (error) {
    alert(error.message);
    // console.log("errorOnUserDetail", error);
  }
};

const sendVerifyEmailHandler = async (idToken) => {
  try {
    const result = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBBwPK-3FcqO64_z8KE_TOY-luwAxohwB4",
      { requestType: "VERIFY_EMAIL", idToken }
    );
    // console.log("sendEmailresult", result);
    if (result.status === 200) {
      alert("Send Verification Email");
    } else {
      throw new Error("Somthing went wrong while sending email");
    }
  } catch (error) {
    alert(error.message);
    console.log("errorWhileSendingVerifyEmail", error);
  }
};

const Form = () => {
  const inputNameRef = useRef();
  const inputImageUrlRef = useRef();
  const idToken = useSelector((state) => state.auth.token);
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
      console.log("response!!!!!!!", response.data.users);
      inputNameRef.current.value = `${response.data.users[0].displayName}`;
      inputImageUrlRef.current.value = `${response.data.users[0].photoUrl}`;
    };
    fecthUserData();
  }, [idToken]);

  const veryifyEmailHanlder = () => {
    sendVerifyEmailHandler(idToken);
  };

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
        <button className="verifyEmail" onClick={veryifyEmailHanlder}>
          {" "}
          very email
        </button>
      </form>
    </>
  );
};

export default Form;
