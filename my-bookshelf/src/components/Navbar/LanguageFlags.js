import React, { useState } from 'react';

const LanguageFlags = () => {
  const [selectedFlag, setSelectedFlag] = useState('/assets/images/us.svg');

  const handleSelect = (flag) => {
    setSelectedFlag(flag);
  };

  const flags = [
    { value: '1', src: '/assets/images/us.svg', label: 'USA' },
    { value: '2', src: '/assets/images/br.svg', label: 'Brazil' },
  ];

  return (
    <div
      className='col d-flex m-auto ms-0 me-3'
      style={{ maxWidth: '5rem', cursor: 'pointer' }}
    >
      <div className='dropdown'>
        <div
          className='form-select form-select-sm'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <img
            className='rounded border border-warning border-2'
            src={selectedFlag}
            alt='Flag'
            style={{ width: '2rem', height: 'auto' }}
          />
        </div>
        <ul className='dropdown-menu'>
          {flags.map((flag) => (
            <li
              key={flag.value}
              onClick={() => handleSelect(flag.src)}
              className='d-flex align-items-center p-2'
            >
              <img
                className='rounded border border-warning border-2 me-2'
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
