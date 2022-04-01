import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import ExpensesFilter from "./ExpensesFilter";

function ExpensesList({ items }) {
  const [selectedValue, setSelectedValue] = useState("all");

  const filteredExpenses = items.filter((item) =>
    selectedValue === "all"
      ? item
      : item.date.getFullYear().toString() === selectedValue
      ? item
      : false
  );

  return (
    <Card className="expenses">
      <ExpensesFilter setSelectedValue={setSelectedValue} items={items} />

      {filteredExpenses.length === 0 ? (
        <span>No expenses</span>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))
      )}
    </Card>
  );
}

export default ExpensesList;
