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
  const [historyItem, setHistoryItem] = useState([]);

  console.log(text, amount);
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction
          text={text}
          setText={setText}
          amount={amount}
          setAmount={setAmount}
        />
      </div>
    </div>
  );
};

export default App;
