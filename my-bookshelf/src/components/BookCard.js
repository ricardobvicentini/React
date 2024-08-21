import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import bookData from '../db/bookData';

const BookCard = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const foundBook = bookData.find(({ bookId }) => bookId === id);
    if (foundBook) {
      setBook([foundBook]); // Set as an array with a single book object
      setLoading(false);
    }
  }, [id]); // Add id as a dependency

  // Early return if book is not yet set
  if (book.length === 0) {
    return loading;
  }

  const [selectedBook] = book;

  return (
    <div
      className='container'
      style={{ width: 'min(50rem, 85vw)', marginTop: '9rem' }}
    >
      <div className='col-sm-12'>
        {loading ? (
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : (
          <div
            className='card shadow h-100 mb-3 mx-auto'
            style={{ maxWidth: '33.75rem' }}
          >
            <div className='row g-0 h-100'>
              <div className='col-5'>
                <img
                  src={`../${selectedBook.image}`}
                  className='img-fluid object-fit-fill rounded-start h-100'
                  alt='Book cover'
                  loading='lazy'
                />
              </div>
              <div className='col-7'>
                <div className='card-body h-100 d-flex flex-column'>
                  <h5 className='card-title'>{selectedBook.title}</h5>

                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      Author: {selectedBook.author}
                    </li>
                    <li className='list-group-item'>
                      Genre: {selectedBook.genre}
                    </li>
                    <li className='list-group-item'>
                      Description:{' '}
                      {showFullDescription
                        ? selectedBook.description
                        : selectedBook.description.substring(0, 90) + '...'}
                      <br />
                      <button
                        onClick={() =>
                          setShowFullDescription(
                            (prevShowFullDescription) =>
                              !prevShowFullDescription
                          )
                        }
                        type='button'
                        className='btn btn-outline-primary btn-sm mt-3 show-more-btns'
                      >
                        {!showFullDescription ? 'Show more' : 'Show less'}
                      </button>
                    </li>
                    <li className='list-group-item'>
                      Pages: {selectedBook.pages}
                    </li>
                    <li className='list-group-item d-flex align-items-center gap-1 '>
                      Rating:{' '}
                      {Array.from({ length: selectedBook.stars }, (_, i) => (
                        <FaStar
                          key={selectedBook.stars - i}
                          style={{ color: '#ffc107' }}
                        />
                      ))}
                    </li>
                  </ul>
                  <button
                    className='btn btn-outline-warning mt-auto mt-auto align-self-center outlined-btns'
                    style={{ width: '40%' }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
