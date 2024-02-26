import React, { useRef } from "react";
import "./expensesForm.css";

const ExpensesForm = () => {
  const inputPriceRef = useRef();
  const inputDescriptRef = useRef();
  const inputCategoryRef = useRef();

  const formSubmitHanlder = (eve) => {
    eve.preventDefault();
    const obj = {
      price: inputPriceRef.current.value,
      decription: inputDescriptRef.current.value,
      category: inputCategoryRef.current.value,
    };

    console.log("obj", obj);
  };

  return (
    <div className="expenseContainer">
      <form className="expensesFrom" onSubmit={formSubmitHanlder}>
        <h3>Expenses</h3>
        <div className="form-control">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            placeholder="enter price"
            className="priceInput"
            ref={inputPriceRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            placeholder="description"
            className="descriptionInput"
            ref={inputDescriptRef}
          />
        </div>
        <div className="form-control">
          <label for="category">Choose category:</label>
          <select
            name="category"
            id="category"
            className="categorySelector"
            ref={inputCategoryRef}>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary </option>
          </select>
        </div>
        <button type="submit" className="FormSubmit">
          Submit
        </button>
      </form>
      <div className="ListContainer">
        <ul>
          <table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100$</td>
                <td>these are for our personal purpose</td>
                <td>Salary</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  );
};

export default ExpensesForm;
