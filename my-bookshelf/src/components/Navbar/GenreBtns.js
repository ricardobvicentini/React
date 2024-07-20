const GenreBtns = ({ genreItems, onGenreChange }) => {
  return (
    <>
      {genreItems.map((item, i) => (
        <div className='form-check' key={i + item}>
          <input
            className='form-check-input'
            type='checkbox'
            value={item}
            id={item}
            onChange={onGenreChange}
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
