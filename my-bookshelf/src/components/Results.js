const Results = ({ query, checkedGenres, booksToBeFiltered }) => {
  return (
    <div className='container d-flex justify-content-center align-items-center my-4'>
      <p className='col-3 my-0 text-center' style={{ minHeight: '1.5rem' }}>
        {query !== 0 && 'Results: ' + booksToBeFiltered.length}
      </p>
    </div>
  );
};

export default Results;
