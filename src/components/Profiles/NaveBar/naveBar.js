import React from "react";
import "./naveBar.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authReducer";

const NaveBar = (props) => {
  const dispatch = useDispatch();
  const showPremiumBtn = useSelector((state) => state.expense.showPremiunBtn);
  // console.log("shobtn", showPremiumBtn);
  const logoutOnClickHanlder = () => {
    dispatch(authAction.logout());
  };

  return (
    <header>
      <ul>
        <li>
          <span>{props.heading}</span>
        </li>
        <li>
          {showPremiumBtn && <button className="primiumBtn">ByPremium</button>}
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
