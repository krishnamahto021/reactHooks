import "./App.css";
import React from "react";
import { useState,useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo"; 
import ExpenseList from "./components/ExpenseList/ExpenseList"; 
import Transaction from "./components/Transaction/Transaction";

// export default class App extends React.Component {
//   // Create state for the expenses here
//   render() {
    // return (
    //   <>
    //     <h2 className="mainHeading">Expense Tracker</h2>
    //     <div className="App">
    //       {/* Render expense form here */}
    //       <div className="expenseContainer">
    //         {/* Render Expense Info here
    //         Render Expense List here */}
    //         <ExpenseForm />
    //         <ExpenseInfo/>
    //         <ExpenseList/>
    //         {/* <Transaction/> */}
    //       </div>
    //     </div>
    //   </>
    // );
//   }
// }

export default function App () {
  const [expenseAmount,setExpenseAmount] = useState(0);
  const [expenseText,setExpenseText] = useState('');
  const [data,setData] = useState([]);
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <div className="expenseContainer">
          {/* Render Expense Info here
          Render Expense List here */}
          <ExpenseForm expenseAmount={expenseAmount} setExpenseAmount={setExpenseAmount} expenseText={expenseText} setExpenseText={setExpenseText} data={data} setData={setData}/>
          <ExpenseInfo data={data}/>
          {data.length>0 ? <ExpenseList data={data} setData={setData}/>:null}
        </div>
      </div>
    </>
  );

}
