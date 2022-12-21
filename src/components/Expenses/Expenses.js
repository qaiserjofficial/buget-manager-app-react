import React, { useState } from "react";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import ExpensesList from "../Expenses/ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  //Here props is an object transfer by the App.js containg complete array of expenses which defiened in App.js component
  // console.log(props);
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
