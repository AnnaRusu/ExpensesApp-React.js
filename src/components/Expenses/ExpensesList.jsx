import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import ExpensesFilter from "./ExpensesFilter";

function ExpensesList({ items }) {
  const [selectedValue, setSelectedValue] = useState("all");

  const filteredExpenses = items.filter(expense => expense.date.getFullYear().toString() === selectedValue);
  const renderAllExpenses = items.map(item => 
    <ExpenseItem
      key={item.id}
      title={item.title}
      price={item.price}
      date={item.date}
    />
  )
  const renderFilteredExpenses = filteredExpenses.map(item => 
    <ExpenseItem
      key={item.id}
      title={item.title}
      price={item.price}
      date={item.date}
    />
  )

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedValue}
        handleFilterChange={(value) => setSelectedValue(value)}
        items={items}
      />

      {selectedValue === "all" ? renderAllExpenses : renderFilteredExpenses}
    </Card>
  );
}

export default ExpensesList;
