import ExpensesList from "./components/Expenses/ExpensesList";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import { useState } from 'react';

  const initialExpenses = [
    { id: "e1", title: "Toilet Paper", price: 94.12, date: new Date(2020, 7, 14)},
    { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12)},
    { id: "e3", title: "Car Insurance", price: 294.67, date: new Date(2021, 2, 28)},
    { id: "e4", title: "New Desk (Wooden)", price: 450, date: new Date(2021, 5, 12)},
  ];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const handleSubmitForm = (inputData) => {
    const expense = {
      ...inputData, 
      id: Math.random().toString(),
    };

    setExpenses(prevExpenses => [...prevExpenses, expense]);
  }

  return (
    <div>
      <h2>Let's get started</h2>
      <ExpensesList items={expenses} />
      <ExpenseForm onSubmitForm={handleSubmitForm}/>
    </div>
  );
}

export default App;
