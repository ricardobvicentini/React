const Card = ({ image, title, author, genre, pages }) => {
  return (
    <div className='col-12 col-lg-6'>
      <div
        className='card shadow h-100 mb-3 mx-auto'
        style={{ maxWidth: '33.75rem' }}
      >
        <div className='row g-0 h-100'>
          <div className='col-md-4 '>
            <img
              src={image}
              className='img-fluid  rounded-start h-100'
              alt='...'
            />
          </div>
          <div className='col-md-8 h-100'>
            <div className='card-body h-100 d-flex flex-column'>
              <h5 className='card-title'>{title}</h5>

              <ul className='list-group list-group-flush mb-2'>
                <li className='list-group-item'>Author: {author}</li>
                <li className='list-group-item'>Genre: {genre}</li>
                <li className='list-group-item'>Pages: {pages}</li>
              </ul>
              <a
                href='/'
                className='btn btn-outline-warning mt-auto'
                style={{ width: '40%' }}
              >
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
