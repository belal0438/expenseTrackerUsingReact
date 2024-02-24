import React from "react";
import "./naveBar.css";

const NaveBar = (props) => {
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
      </ul>
      <div className="linDiv"></div>
    </header>
  );
};

export default NaveBar;
