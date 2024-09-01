import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Loader from '../components/Loader';
import bookData from '../db/bookData';

const BookCard = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    setLoading(true);
    const foundBook = bookData.find(({ bookId }) => bookId === id);
    if (foundBook) {
      setBook([foundBook]); // Set as an array with a single book object
      setLoading(false);
      document.title = `${foundBook.title}`; // Change to book title
    }
    // Return to original title
    return function cleanTitle() {
      document.title = 'My Bookshelf';
    };
  }, [id]); // Add id as a dependency

  // Early return if book is not yet set
  if (book.length === 0) {
    return loading;
  }

  const [selectedBook] = book;

  return (
    <div
      className='container'
      style={{ width: 'min(50rem, 80vw)', marginTop: '9rem' }}
    >
      <div className='col-sm-12'>
        {loading ? (
          <Loader />
        ) : (
          <div
            className='card shadow h-100 mb-3 mx-auto'
            style={{ maxWidth: '40rem' }}
          >
            <div className='row g-0 h-100'>
              <div className='col-5'>
                <img
                  src={`../${selectedBook.image}`}
                  className='img-fluid object-fit-fill rounded'
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
                      <div className='mx-auto d-flex justify-content-center'>
                        <button
                          onClick={() =>
                            setShowFullDescription(
                              (prevShowFullDescription) =>
                                !prevShowFullDescription
                            )
                          }
                          type='button'
                          className='btn btn-outline-primary btn-sm my-2 show-more-btns'
                          style={{
                            paddingInline: '.25rem',
                            paddingBlock: '.5rem',
                            fontSize: '.75rem',
                          }}
                        >
                          {!showFullDescription ? 'Show more' : 'Show less'}
                        </button>
                      </div>
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
