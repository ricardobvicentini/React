import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Card = ({ image, title, author, genre, pages, stars }) => {
  return (
    <div className='col-sm-12 col-lg-6'>
      <Link onClick={(e) => console.log(e.target)} to='/book'>
        <div
          className='card shadow h-100 mb-3 mx-auto'
          style={{ maxWidth: '33.75rem' }}
        >
          <div className='row g-0 h-100'>
            <div className='col-5'>
              <img
                src={image}
                className='img-fluid object-fit-fill rounded-start h-100'
                alt='Book cover'
                loading='lazy'
              />
            </div>
            <div className='col-7'>
              <div className='card-body h-100 d-flex flex-column'>
                <h5 className='card-title'>{title}</h5>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>Author: {author}</li>
                  <li className='list-group-item'>Genre: {genre}</li>
                  <li className='list-group-item'>Pages: {pages}</li>
                  <li className='list-group-item d-flex align-items-center gap-1 '>
                    Rating:{' '}
                    {Array.from({ length: stars }, (_, i) => (
                      <FaStar key={stars - i} style={{ color: '#ffc107' }} />
                    ))}
                  </li>
                </ul>
                {/* <button
                  className='btn btn-outline-warning mt-auto'
                  style={{ width: '40%' }}
                >
                  Edit
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
