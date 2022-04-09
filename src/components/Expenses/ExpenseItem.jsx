import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.scss";

function ExpenseItem({ title, date, price }) { 
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">${price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
