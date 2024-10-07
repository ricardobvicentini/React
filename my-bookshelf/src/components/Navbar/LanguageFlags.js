import React, { useState } from 'react';

const LanguageFlags = () => {
  const [selectedFlag, setSelectedFlag] = useState('EN');

  function handleSelect(flag) {
    setSelectedFlag(flag);
  }

  const flags = [
    {
      value: '1',
      src: '/assets/images/us.svg',
      label: 'EN',
    },
    {
      value: '2',
      src: '/assets/images/br.svg',
      label: 'PT',
    },
  ];

  console.log(selectedFlag);

  return (
    <div
      className='col d-flex m-auto ms-0 me-2'
      style={{ maxWidth: '5rem', cursor: 'pointer' }}
    >
      <div className='dropdown'>
        <div
          className='form-select form-select-sm '
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {selectedFlag}
          {/* <img
            className='rounded  border-2'
            src={selectedFlag}
            alt='Flag'
            style={{ width: '1.5rem', height: 'auto' }}
          /> */}
        </div>
        <ul className='dropdown-menu '>
          {flags.map((flag) => (
            <li
              key={flag.value}
              onClick={() => handleSelect(flag.label)}
              className='d-flex align-items-center p-2'
            >
              <img
                className='rounded border-2 me-2'
                src={flag.src}
                alt={flag.label}
                style={{ width: '1.5rem', height: 'auto' }}
              />
              {flag.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageFlags;
