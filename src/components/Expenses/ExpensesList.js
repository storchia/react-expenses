import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = () => {
  let expensesContent = <p>No expenses found</p>;

  if (props.items.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }
};

export default ExpensesList;
