import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import bookData from '../db/bookData';

const BookCard = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const foundBook = bookData.find(({ bookId }) => bookId === id);
    foundBook && setBook(foundBook);
    console.log(foundBook);
  }, [id]);

  const [selectedBook] = book;

  return (
    <div
      className='container'
      style={{ width: 'min(50rem, 85vw)', marginTop: '9rem' }}
    >
      <div className='col-sm-12'>
        <div
          className='card shadow h-100 mb-3 mx-auto'
          style={{ maxWidth: '33.75rem' }}
        >
          <div className='row g-0 h-100'>
            <div className='col-5'>
              <img
                src={`../${selectedBook.image}`}
                className='img-fluid object-fit-fill rounded-start h-100'
                alt='selectedBook cover'
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
                  className='btn btn-outline-warning mt-auto'
                  style={{ width: '40%' }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
