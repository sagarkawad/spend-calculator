import "./InputModule.css";

//imports
import { useState } from "react";
import ResultTable from "./ResultTable";

//data
// let items = ["Food", "Entertainment", "Essentials", "Other"];
// let item = items[0];

let item;

export default function InputModule() {
  //useState
  const [resultTable, setResultTable] = useState({});
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [items, setItems] = useState(["Food", "Entertainment", "Essentials"]);

  console.log("resulttable = " + resultTable);

  function onRemoveHandler() {
    setItems((prevItems) => {
      const elementToRemove = item;

      const newArray = prevItems.filter(
        (arrayItem) => arrayItem !== elementToRemove
      );

      console.log(newArray);
      return newArray; // Output: [1, 2, 4, 5]
    });

    // Remove the 'age' key-value pair from the object
    setResultTable((prevResultTable) => {
      let obj = { ...prevResultTable };
      delete obj[item];
      return obj;
    });

    item = items[0];

    setAmount("");
  }

  function setCategoryHandler(e) {
    setCategory(e.target.value);
  }

  function addCategoryHandler() {
    const elementToAdd = category;

    setItems((prevItems) => {
      let data = [...prevItems];
      // Calculate the index of the second last position
      data.append(category);
      return data;
    });

    setCategory("");
  }

  function onChangeHandlerOptions(e) {
    item = e.target.value;
    console.log(item);
    setAmount(() => {
      return "";
    });
  }

  function onDoneHandler() {
    setAmount(() => {
      return "";
    });
  }

  function onChangeHandler(e) {
    setAmount(() => e.target.value);

    setResultTable((prevResultTable) => {
      let prevResultTableDeep = { ...prevResultTable };
      console.log("item " + item);
      prevResultTableDeep[item || items[0]] = Number(e.target.value);
      console.log(prevResultTableDeep);
      return prevResultTableDeep;
    });
    // console.log(e.target.value);
    // console.log(item);
  }

  return (
    <>
      <section className="user-ip">
        <div className="dropdown">
          <select
            id="category"
            name="category"
            className="category"
            onChange={onChangeHandlerOptions}
          >
            {items.map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
          <button onClick={onRemoveHandler}>Remove</button>
        </div>
        <div className="add-section">
          <input
            type="number"
            placeholder="amount"
            onChange={onChangeHandler}
            value={amount}
          />
          <button className="add" onClick={onDoneHandler}>
            Done
          </button>
        </div>
        <div className="add-category">
          <input
            type="text"
            placeholder="add a category"
            onChange={setCategoryHandler}
            value={category}
          />
          <button onClick={addCategoryHandler}>Add</button>
        </div>
      </section>
      <ResultTable resultData={resultTable} />
    </>
  );
}
