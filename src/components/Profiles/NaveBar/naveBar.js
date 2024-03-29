import React from "react";
import "./naveBar.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/authReducer";
import { useNavigate } from "react-router-dom";

const NaveBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showPremiumBtn = useSelector((state) => state.expense.showPremiunBtn);
  // console.log("shobtn", showPremiumBtn);
  const logoutOnClickHanlder = () => {
    dispatch(authAction.logout());
    navigate("/expenses");
  };

  const activePremiumHandler = () => {
    props.showDownloadBtn();
  };

  return (
    <header>
      <ul>
        <li>
          <span>{props.heading}</span>
        </li>
        <li>
          {showPremiumBtn && (
            <button className="primiumBtn" onClick={activePremiumHandler}>
              Active Premium
            </button>
          )}
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
