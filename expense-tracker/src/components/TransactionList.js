import React from 'react';

const TransactionList = ({ historyList, onDeleteItem }) => {
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {historyList.map((item) => (
          <li key={item.id} className={item.amount < 0 ? 'minus' : 'plus'}>
            {item.description} <span>{item.amount}</span>
            <button
              onClick={() => onDeleteItem(item.id)}
              className='delete-btn'
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
