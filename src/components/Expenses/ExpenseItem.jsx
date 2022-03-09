import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item-description'>
        <h2>{props.title}</h2>
        <div className='expense-item-price'>${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;