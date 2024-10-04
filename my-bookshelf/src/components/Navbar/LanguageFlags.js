import React from 'react';

const LanguageFlags = () => {
  return (
    <div
      className='col d-flex m-auto ms-0 me-3'
      style={{ maxWidth: '1.5rem', cursor: 'pointer' }}
    >
      <img
        className='rounded border border-warning border-2'
        src='/assets/images/us.svg'
        alt='Flag'
      />
    </div>
  );
};

export default LanguageFlags;
