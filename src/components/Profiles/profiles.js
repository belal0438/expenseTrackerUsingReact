import React, { useState } from "react";
import NaveBar from "./NaveBar/naveBar";
import Form from "./form/form";

const Profiles = () => {
  const [showForm, setShoeForm] = useState(false);

  const CompletNowBtnOnExpenseTrackerH3 = () => {
    setShoeForm(true);
  };

  return (
    <div>
      <NaveBar
        OnClickCompletNow={CompletNowBtnOnExpenseTrackerH3}
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
      {showForm && <Form />}
    </div>
  );
};

export default Profiles;
