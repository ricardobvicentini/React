import React from 'react';

const GenreBtns = ({ genreItems }) => {
  return (
    <div>
      {genreItems.map((item, i) => (
        <div key={i}>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id={item}
          />
          <label className='form-check-label' htmlFor={item}>
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default GenreBtns;
