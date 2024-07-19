import { useState } from 'react';

const GenreBtns = ({ genreItems }) => {
  const [checkedGenres, setCheckedGenres] = useState([]);

  function handleGenreChange(e) {
    if (e.target.checked) {
      setCheckedGenres([...checkedGenres, e.target.value]);
    } else {
      setCheckedGenres(checkedGenres.filter((item) => item !== e.target.value));
    }
  }

  console.log(checkedGenres);
  return (
    <>
      {genreItems.map((item, i) => (
        <div className='form-check' key={i + item}>
          <input
            className='form-check-input'
            type='checkbox'
            value={item}
            id={item}
            onChange={handleGenreChange}
          />
          <label className='form-check-label' htmlFor={item}>
            {item}
          </label>
        </div>
      ))}
    </>
  );
};

export default GenreBtns;
