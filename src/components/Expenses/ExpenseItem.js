import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price ">Pkr:{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
