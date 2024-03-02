import React from "react";

const DownloadExpenseBtn = (props) => {
  const expenses = props.expenses;
  const OnClickDownloadHandler = () => {
    const csvHeader = "Price,Description,Category\n";
    const csvContent = expenses
      .map((e) => `${e.price},${e.decription},${e.category}`)
      .join("\n");

    const blob = new Blob([csvHeader, csvContent], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "expenses.csv";
    link.click();
  };

  return (
    <button className={props.className} onClick={OnClickDownloadHandler}>
      Download Expenses
    </button>
  );
};

export default DownloadExpenseBtn;
