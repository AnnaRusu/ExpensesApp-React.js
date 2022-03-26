import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm({ onSubmitForm }) {
  const titleLabel = "Title";
  const priceLabel = "Price";
  const dateLabel = "Date";

  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: inputTitle,
      price: inputPrice,
      date: new Date(inputDate),
    };

    onSubmitForm(expenseData);

    setInputTitle("");
    setInputPrice("");
    setInputDate("");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="new-expense-detail">
        <label>{titleLabel}</label>
        <input
          value={inputTitle}
          type="text"
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </div>

      <div className="new-expense-detail">
        <label>{priceLabel}</label>
        <input
          value={inputPrice}
          type="number"
          min="0.01"
          step="0.01"
          onChange={(e) => setInputPrice(e.target.value)}
        />
      </div>

      <div className="new-expense-detail">
        <label>{dateLabel}</label>
        <input
          value={inputDate}
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={(e) => setInputDate(e.target.value)}
        />
      </div>

      <div className="new-expense-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;