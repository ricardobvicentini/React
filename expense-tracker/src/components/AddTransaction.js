import React, { useState } from 'react';

const AddTransaction = ({ text, amount, setText, setAmount }) => {
  /* const [text, setText] = useState('');
  const [amount, setAmount] = useState(0); */

  console.log(text, amount);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            onChange={({ target }) => setText(target.value)}
            type='text'
            id='text'
            value={text}
            placeholder='Enter text...'
          ></input>
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            onChange={({ target }) => setAmount(target.value)}
            type='number'
            id='amount'
            value={amount}
            placeholder='Enter amount...'
          ></input>
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
