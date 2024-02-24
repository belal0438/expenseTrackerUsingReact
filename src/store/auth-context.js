import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  loggin: (token) => {},
  logout: () => {},
});

export const AuthenCationProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const LogOutHanlder = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const authCtxValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    loggin: logginHandler,
    logout: LogOutHanlder,
  };

  return (
    <AuthContext.Provider value={authCtxValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
