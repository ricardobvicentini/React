import React from 'react';

const TransactionList = ({ historyList }) => {
  console.log(historyList);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {historyList.map((item) => (
          <li key={item.id} className='minus'>
            {item.description} <span>{item.amount}</span>
            <button className='delete-btn'>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
