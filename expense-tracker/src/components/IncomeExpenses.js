/* import React, { useState } from 'react'; */

const IncomeExpenses = ({ income, expenses }) => {
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className='money minus'>-${Math.abs(expenses).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
