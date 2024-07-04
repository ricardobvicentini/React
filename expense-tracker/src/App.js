import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

const App = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [historyList, setHistoryList] = useState([]);

  const income = historyList
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  const expenses = historyList
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id:
        historyList.length === 0
          ? 1
          : historyList[historyList.length - 1].id + 1,
      description: text,
      amount: +amount,
    };
    newItem.description &&
      newItem.amount &&
      setHistoryList((prevHistoryList) => [...prevHistoryList, newItem]);
    setText('');
    setAmount('');
  };

  const handleDeleteItem = (id) => {
    setHistoryList(historyList.filter((delItem) => delItem.id !== id));
  };

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses income={income} expenses={expenses} />
        <TransactionList
          historyList={historyList}
          onDeleteItem={handleDeleteItem}
        />
        <AddTransaction
          text={text}
          setText={setText}
          amount={amount}
          setAmount={setAmount}
          onAddItem={handleAddItem}
        />
      </div>
    </div>
  );
};

export default App;
