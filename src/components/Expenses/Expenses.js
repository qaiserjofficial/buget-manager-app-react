import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  //Here props is an object transfer by the App.js containg complete array of expenses which defiened in App.js component
  // console.log(props);
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeFilter}
        />
        <ExpenseItem
          title={props.items[0].title} //Toilet Paper
          amount={props.items[0].amount} // 94.12
          date={props.items[0].date} //14-07-2020
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};
export default Expenses;
