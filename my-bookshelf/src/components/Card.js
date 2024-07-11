const Card = ({ image, title, author, genre, pages }) => {
  return (
    <div className='col-12 col-md-6 border border-danger '>
      <div className='card mx-auto' style={{ width: '20rem' }}>
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
      </div>
    </div>
  );
};

export default Card;
