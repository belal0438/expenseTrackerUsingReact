import React, { useContext } from "react";
import "./naveBar.css";
import AuthContext from "../../../store/auth-context";

const NaveBar = (props) => {
  const AuthCtxt = useContext(AuthContext);

  const logoutOnClickHanlder = () => {
    AuthCtxt.logout();
  };

  return (
    <header>
      <ul>
        <li>
          <span>{props.heading}</span>
        </li>
        <li>
          <div className="leftDiv">
            {props.profileDesc}
            <button className="ComplNow" onClick={props.OnClickCompletNow}>
              Complete now
            </button>
          </div>
        </li>
        <li>
          <button className="LogOut" onClick={logoutOnClickHanlder}>
            Logout
          </button>
        </li>
      </ul>
      <div className="linDiv"></div>
    </header>
  );
};

export default NaveBar;
