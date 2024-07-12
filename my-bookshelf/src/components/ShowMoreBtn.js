const ShowMoreBtn = ({ setBookNum }) => {
  return (
    <div className='d-grid gap-2 col-2 mx-auto my-3'>
      <button
        onClick={() => setBookNum((prevBookNum) => prevBookNum + 4)}
        className='btn btn-outline-primary shadow-sm'
        type='button'
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMoreBtn;
