import "./InputModule.css";

//imports
import { useState } from "react";
import ResultTable from "./ResultTable";

//data
let items = ["Food", "Entertainment", "Essentials", "Other"];
let item = items[0];

export default function InputModule() {
  //useState
  const [resultTable, setResultTable] = useState({});
  const [amount, setAmount] = useState("");

  function onClickHandler(e) {
    item = e.target.value;
    console.log(item);
    setAmount("");
  }

  function onChangeHandler(e) {
    setAmount(e.target.value);

    setResultTable((prevResultTable) => {
      let prevResultTableDeep = { ...prevResultTable };
      console.log("item " + item);
      prevResultTableDeep[item] = Number(e.target.value);
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
            onClick={onClickHandler}
          >
            {items.map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
        <div className="add-section">
          <input
            type="number"
            placeholder="amount"
            onChange={onChangeHandler}
            value={amount}
          />
          <button className="add">Done</button>
        </div>
      </section>
      <ResultTable resultData={resultTable} />
    </>
  );
}
