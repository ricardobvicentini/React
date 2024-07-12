const Card = ({ image, title, author, genre, pages }) => {
  return (
    <div className='col-12 col-md-6'>
      <div className='card shadow mb-3' style={{ maxWidth: '33.75rem' }}>
        <div className='row g-0'>
          <div className='col-md-4 justify-content-center align-items-center'>
            <img
              src={image}
              className='img-fluid img-thumbnail rounded-start'
              alt='...'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>

              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Author: {author}</li>
                <li className='list-group-item'>Genre: {genre}</li>
                <li className='list-group-item'>Pages: {pages}</li>
              </ul>
              <a href='/' className='btn btn-outline-warning mt-2'>
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='card mx-auto shadow' style={{ width: '20rem' }}>
        <img src={image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>

          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Author: {author}</li>
            <li className='list-group-item'>Genre: {genre}</li>
            <li className='list-group-item'>Pages: {pages}</li>
          </ul>
          <a href='/' className='btn btn-outline-warning mt-2'>
            Edit
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
