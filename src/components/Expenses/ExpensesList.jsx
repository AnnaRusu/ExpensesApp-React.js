import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem title={item.title} price={item.price} date={item.date} />
      ))}
    </Card>
  );
}

export default ExpensesList;
