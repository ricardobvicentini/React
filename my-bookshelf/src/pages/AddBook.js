import CommonNavBar from '../components/Navbar/CommonNavBar';
import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const AddBook = () => {
  const [stars, setStars] = useState(1);
  const [tempStars, setTempStars] = useState(1);
  const defaultBook = {
    image: '/assets/images/coming-soon.jpg',
    title: '',
    author: '',
    genre: '',
    description: '',
    pages: 0,
    rating: 1,
  };
  const [newBook, setNewBook] = useState(defaultBook);
  const [showFullDescription, setShowFullDescription] = useState(false);

  function handleChange(e) {
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [e.target.name]: e.target.value,
    }));
  }

  // Clear the input when focused if it's zero
  function handleFocus(e) {
    if (e.target.value === '0') {
      e.target.value = '';
    }
  }

  // Reset the input to zero if it's empty
  function handleBlur(e) {
    if (e.target.value === '') {
      e.target.value = '0';
      setNewBook((prevNewBook) => ({
        ...prevNewBook,
        [e.target.name]: 0,
      }));
    }
  }

  // Update rating in newBook
  function handleRate(n) {
    setStars(n + 1);
    setNewBook({ ...newBook, rating: n + 1 });
  }

  function handleClear() {
    setNewBook(defaultBook);
    setTempStars(1);
  }

  useEffect(() => {
    document.title = 'Add Book';
    return function cleanTitle() {
      document.title = 'My Bookshelf';
    };
  }, []);

  console.log(newBook);

  return (
    <div className='add-book-wrapper'>
      <CommonNavBar />
      <div
        className='container'
        style={{ width: 'min(30rem, 85vw)', marginTop: '2rem' }}
      >
        <div className='mb-3'>
          <label htmlFor='image' className='form-label'>
            Image
          </label>
          <input
            id='image'
            name='image'
            className='form-control'
            type='file'
            /* value={newBook.image} */
            accept='image/*'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='form-control'
            value={newBook.title}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='author' className='form-label'>
            Author
          </label>
          <input
            type='text'
            id='author'
            name='author'
            className='form-control'
            value={newBook.author}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='genre' className='form-label'>
            Genre
          </label>
          <input
            type='text'
            id='genre'
            name='genre'
            className='form-control'
            value={newBook.genre}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <textarea
            className='form-control'
            id='description'
            name='description'
            rows='3'
            value={newBook.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor='pages' className='form-label'>
            Pages
          </label>
          <input
            type='number'
            min='0'
            id='pages'
            name='pages'
            className='form-control'
            value={newBook.pages}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='stars' className='form-label'>
            Stars
          </label>
          <div className='d-flex align-items-center gap-1 '>
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i + 1}
                onRate={() => handleRate(i)}
                onHoverIn={() => setTempStars(i + 1)}
                onHoverOut={() => setTempStars(stars)}
                full={tempStars ? tempStars >= i + 1 : stars >= i + 1}
              />
            ))}
            <span className='ms-2 align-middle'>{tempStars || stars}</span>
          </div>
        </div>
        <div className='d-flex col-12 gap-2 mx-auto my-4'>
          <button
            className='col-6 btn full-btns'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Add
          </button>
          <button
            className='col-6 btn btn-outline-primary show-more-btns'
            type='button'
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      {/* Modal */}
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                {newBook.title}
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div
                className='card shadow h-100 mb-3 mx-auto'
                style={{ maxWidth: '40rem' }}
              >
                <div className='row g-0 h-100'>
                  <div className='col-5'>
                    <img
                      src={`../${newBook.image}`}
                      className='img-fluid object-fit-fill rounded-start h-100'
                      alt='Book cover'
                      loading='lazy'
                    />
                  </div>
                  <div className='col-7'>
                    <div className='card-body h-100 d-flex flex-column'>
                      <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                          Author: {newBook.author}
                        </li>
                        <li className='list-group-item'>
                          Genre: {newBook.genre}
                        </li>
                        <li className='list-group-item'>
                          Description:{' '}
                          {showFullDescription
                            ? newBook.description
                            : newBook.description.substring(0, 90) + '...'}
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
                          Pages: {newBook.pages}
                        </li>
                        <li className='list-group-item d-flex align-items-center gap-1 '>
                          Rating:
                          <div className='d-flex align-items-center gap-1 '>
                            {Array.from({ length: newBook.rating }, (_, i) => (
                              <span>
                                <FaStar key={i} style={{ color: '#ffc107' }} />
                              </span>
                            ))}
                            <span className='ms-2 align-middle'>
                              {tempStars || stars}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-outline-primary show-more-btns'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn full-btns'>
                Add book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Star = ({ onRate, onHoverIn, onHoverOut, full }) => {
  return (
    <span
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={{ cursor: 'pointer' }}
    >
      {full ? <FaStar style={{ color: '#ffc107' }} /> : <FaRegStar />}
    </span>
  );
};

export default AddBook;
