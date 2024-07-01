import React from 'react';

const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' id='text' placeholder='Enter text...'></input>
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            placeholder='Enter amount...'
          ></input>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
