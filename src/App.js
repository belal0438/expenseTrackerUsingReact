import React from "react";
import "./App.css";
import Users from "./components/Users/users";
import Profiles from "./components/Profiles/profiles";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      {!isLoggedIn && <Users />}
      {isLoggedIn && <Profiles />}
    </div>
  );
}

export default App;
