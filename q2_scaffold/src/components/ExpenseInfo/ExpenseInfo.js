import React from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo(props) {
  const {data} = props;
  const { incomeAmount, expenseAmount } = data.reduce(
    (totals, item) => {
      if (item.expenseAmount > 0) {
        totals.incomeAmount += parseInt(item.expenseAmount);
      } else {
        totals.expenseAmount += parseInt(item.expenseAmount);
      }
      return totals;
    },
    { incomeAmount: 0, expenseAmount: 0 }
  );

  const totalAmount = incomeAmount + expenseAmount;


  return (
    <>
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>${totalAmount}</h1>
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              ${incomeAmount}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              ${expenseAmount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
