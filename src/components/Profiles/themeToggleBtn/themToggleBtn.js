import React from "react";
import "./themToggleBtn.css";
import { useDispatch } from "react-redux";
import { themAction } from "../../../store/themReducer";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(themAction.toggleTheme());
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;

/* <label className="theme-toggle-label">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="theme-toggle-checkbox"
      />
      <span className="theme-toggle-slider round"></span>
      <span className="theme-toggle-text">
        {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
      </span>
    </label> */
