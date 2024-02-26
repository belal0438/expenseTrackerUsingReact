import React, { useState } from "react";
import UserForgetPassword from "./userForgetPassword";
import UsersForm from "./usersForm";

const Users = () => {
  const [showUserForm, setShowUserFrom] = useState(true);

  const OnClickFrogetPass = () => {
    setShowUserFrom(false);
  };

  return (
    <>
      {showUserForm && <UsersForm OnclickFrogetPass={OnClickFrogetPass} />}
      {!showUserForm && <UserForgetPassword />}
    </>
  );
};

export default Users;
