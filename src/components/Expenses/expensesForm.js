import React, { useRef, useEffect, useState } from "react";
import "./expensesForm.css";
import axios from "axios";

const getExpenses = async () => {
  try {
    const result = await axios.get(
      "https://expensestracker-9e6f5-default-rtdb.firebaseio.com/Expenses.json"
    );
    // console.log("result", result.data);
    const fetchData = [];
    for (let key in result.data) {
      // console.log("result.data", result.data[key]);
      fetchData.push({ id: key, ...result.data[key] });
    }
    return fetchData;
  } catch (error) {
    console.log("errorWhileGettingExpense", error);
    return null;
  }
};

const ExpensesForm = () => {
  const inputPriceRef = useRef();
  const inputDescriptRef = useRef();
  const inputCategoryRef = useRef();
  const [expenses, setExpenses] = useState([]);

  const setTbaleData = (data) => {
    // console.log("data", data);
    return data.length > 0
      ? data.map((expens) => (
          <tr key={Math.random()}>
            <td>{expens.price}$</td>
            <td>{expens.decription}</td>
            <td>{expens.category}</td>
            <td>
              <button onClick={() => OnClickEdditHanlder(expens.id)}>
                Eddit
              </button>
            </td>
            <td>
              <button onClick={() => OnClickDeletHanlder(expens.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      : null;
  };

  async function OnClickEdditHanlder(id) {
    const data = expenses.filter((ele) => ele.id === id);
    // console.log("EdditData", data[0]);
    inputPriceRef.current.value = data[0].price;
    inputDescriptRef.current.value = data[0].decription;
    inputCategoryRef.current.value = data[0].category;
    await OnClickDeletHanlder(id);
  }

  async function OnClickDeletHanlder(id) {
    // console.log("id", id);
    try {
      const result = await axios.delete(
        `https://expensestracker-9e6f5-default-rtdb.firebaseio.com/Expenses/${id}.json`
      );

      // console.log(result);
      if (result.status === 200) {
        const resultUpdatedData = await getExpenses();
        setExpenses(resultUpdatedData);
      } else {
        throw new Error("somthing went wrong while Deleting");
      }
    } catch (error) {
      console.log("ErrorWhileDeletingExpenses", error);
    }
  }

  const formSubmitHanlder = async (eve) => {
    eve.preventDefault();
    const obj = {
      price: inputPriceRef.current.value,
      decription: inputDescriptRef.current.value,
      category: inputCategoryRef.current.value,
    };

    try {
      // console.log("obj", obj);
      const result = await axios.post(
        "https://expensestracker-9e6f5-default-rtdb.firebaseio.com/Expenses.json",
        obj
      );
      // console.log("adde expenses", result);
      if (result.status === 200) {
        setExpenses((prevExpenses) => [...prevExpenses, obj]);
      } else {
        throw new Error("Somthing went wrong while adding expeses");
      }
    } catch (error) {
      alert(error.message);
      // console.log("errorDuringAddExpenses", error);
    }
  };

  useEffect(() => {
    const fecthData = async () => {
      const data = await getExpenses();
      // console.log("data", data);
      if (data) {
        setExpenses(data);
      }
    };
    fecthData();
  }, []);

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
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            placeholder="description"
            className="descriptionInput"
            ref={inputDescriptRef}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Choose category:</label>
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
            <tbody>{setTbaleData(expenses)}</tbody>
          </table>
        </ul>
      </div>
    </div>
  );
};

export default ExpensesForm;
