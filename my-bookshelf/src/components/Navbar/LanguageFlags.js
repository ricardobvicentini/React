import { useState } from 'react';

const LanguageFlags = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const languages = [
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

  function handleLanguage(language) {
    setSelectedLanguage(language);
  }

  return (
    <div
      className='col d-flex m-auto ms-0 me-3 justify-content-end'
      style={{ maxWidth: '5rem' }}
    >
      <div className='dropdown' style={{ minWidth: ' 3.94rem' }}>
        <div
          className='form-select form-select-sm language-btn'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {selectedLanguage}
          {/* <img
            className='rounded  border-2'
            src={selectedFlag}
            alt='Flag'
            style={{ width: '1.5rem', height: 'auto' }}
          /> */}
        </div>
        <ul className='dropdown-menu mt-2' style={{ minWidth: 'fit-content' }}>
          {languages.map((language) => (
            <li
              key={language.value}
              onClick={() => handleLanguage(language.label)}
              className='d-flex align-items-center p-2 '
              style={{ cursor: 'pointer' }}
            >
              <img
                className='rounded border border-secondary border-1 me-2'
                src={language.src}
                alt={language.label}
                style={{ width: '1.2rem', height: 'auto' }}
              />
              {language.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageFlags;
