import React, { useContext } from "react";
import "./App.css";
import Users from "./components/Users/users";
import Profiles from "./components/Profiles/profiles";
import AuthContext from "./store/auth-context";

function App() {
  const authCtxt = useContext(AuthContext);
  // console.log(authCtxt);
  return (
    <div className="App">
      {!authCtxt.isLoggedIn && <Users />}
      {authCtxt.isLoggedIn && <Profiles />}
    </div>
  );
}

export default App;
