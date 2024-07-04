import React from 'react';

const Balance = ({ income, expenses }) => {
  const balance = income - Math.abs(expenses);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 style={{ color: balance < 0 ? 'red' : 'black' }}>${balance}</h1>
    </>
  );
};

export default Balance;
