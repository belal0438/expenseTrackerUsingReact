import React, { useState } from "react";
import NaveBar from "./NaveBar/naveBar";
import "./profiles.css";
import Form from "./form/form";
// import { useNavigate } from "react-router-dom";
import ExpensesForm from "../Expenses/expensesForm";
import ThemeToggle from "./themeToggleBtn/themToggleBtn";
import { useSelector } from "react-redux";

const Profiles = () => {
  const [showForm, setShoeForm] = useState(false);
  const [showDownloadBtn, setShowDownloadBtn] = useState(false);
  const themebackground = useSelector((state) => state.theme.isDarkThem);

  const CompletNowBtnOnExpenseTrackerH3 = () => {
    setShoeForm(true);
  };

  const showDownloadBtnprops = () => {
    setShowDownloadBtn(true);
  };

  return (
    <div>
      <NaveBar
        OnClickCompletNow={CompletNowBtnOnExpenseTrackerH3}
        showDownloadBtn={showDownloadBtnprops}
        heading={
          showForm
            ? "Winner never Quite, Quitters never win"
            : "Welcone to Expense Tracker"
        }
        profileDesc={
          showForm
            ? "your ptofile 64% completed A completed profile has higher chances of landing a job"
            : "Your profile is incomplete"
        }
      />
      <div className={themebackground ? "backgroundColore" : ""}>
        {showDownloadBtn && <ThemeToggle />}
        {showForm && <Form />}
        {!showForm && <ExpensesForm showDownloadBtn={showDownloadBtn} />}
      </div>
    </div>
  );
};

export default Profiles;
