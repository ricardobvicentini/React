/* import React, { useState } from 'react'; */

const IncomeExpenses = ({ historyList }) => {
  const income = historyList
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  const expenses = historyList
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className='money minus'>-${expenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
