import React from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm(props) {
  const { expenseAmount, setExpenseAmount, expenseText, setExpenseText, data, setData } = props;

  function handleSubmit(e) {
    e.preventDefault();
    // Clear the input fields after form submission
    if(parseInt(expenseAmount) === 0){
      return;
    }
    setData([{expenseAmount,expenseText},...data]);
    setExpenseAmount('');
    setExpenseText('');
  }


  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          value={expenseText}
          required
          onChange={(e) => {
            setExpenseText(e.target.value);
          }}
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense, positive - income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          value={expenseAmount}
          required
          onChange={(e) => {
            setExpenseAmount(e.target.value);
          }}

        />
        <button className={styles.submitBtn} type="submit">
          Add Transaction
        </button>
      </form>
    </>
  );
}
