import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpesesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">No expense found!</h2>;
  }
  return (
    <ul className="expeses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpesesList;
