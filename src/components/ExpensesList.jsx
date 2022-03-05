import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
  return (
    <Card className="expenses">
      {props.items.map(item => {
        console.log(item.price);
        return <ExpenseItem title={item.title} price={item.price} date={item.date} />
      })}
    </Card>
  );
}

export default ExpensesList;