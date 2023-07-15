import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

// export default class ExpenseList extends React.Component {
//   render() {
//     return (
//       <div className={styles.expenseListContainer}>
//         <h3>Transactions</h3>
//         <ul className={styles.transactionList}>
//           {/* Display transactions here */}
//         </ul>
//       </div>
//     );
//   }
// }

export default function ExpenseList(props){
  const {data,setData} = props;
  const removeTransaction = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {data.map((expense, index) => (
          <Transaction key={index} expense={expense} index={index} removeTransaction={removeTransaction}/>
        ))}
      </ul>
    </div>
  );
}



