const ShowMoreBtn = ({ bookNum, setBookNum, booksToBeFiltered }) => {
  return (
    <div className='d-grid gap-2 col-6 col-md-3 mx-auto my-5'>
      {booksToBeFiltered.length > bookNum && (
        <button
          onClick={() => setBookNum((prevBookNum) => prevBookNum + 4)}
          className='btn btn-outline-primary shadow-sm'
          type='button'
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default ShowMoreBtn;
