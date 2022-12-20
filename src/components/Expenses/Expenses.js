import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import "./ExpensesFilter.css";
import { useState } from "react";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
