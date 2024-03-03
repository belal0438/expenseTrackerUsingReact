import React from "react";
import "./App.css";
import Users from "./components/Users/users";
import Profiles from "./components/Profiles/profiles";

import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && <Route path="/users" element={<Users />} />}

        <Route
          path="/expenses"
          element={isLoggedIn ? <Profiles /> : <Navigate to="/users" />}
        />
        <Route
          path="*"
          element={
            isLoggedIn ? <Navigate to="/expenses" /> : <Navigate to="/users" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
