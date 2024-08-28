import CommonNavBar from '../components/Navbar/CommonNavBar';
import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const AddBook = () => {
  const [stars, setStars] = useState(1);
  const [tempStars, setTempStars] = useState(1);
  const [newBook, setNewBook] = useState({
    image: '',
    title: '',
    author: '',
    genre: '',
    description: '',
    pages: 0,
    rating: stars,
  });

  function handleChange(e) {
    setNewBook((prevNewBook) => ({
      ...prevNewBook,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name);
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
            value={newBook.name}
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
            value={newBook.name}
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
            value={newBook.name}
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
            value={newBook.name}
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
            value={newBook.name}
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
            value={newBook.name}
            onChange={handleChange}
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
                onRate={() => setStars(i + 1)}
                onHoverIn={() => setTempStars(i + 1)}
                onHoverOut={() => setTempStars(stars)}
                full={tempStars ? tempStars >= i + 1 : stars >= i + 1}
              />
            ))}
            <span className='ms-2 align-middle'>{tempStars || stars}</span>
          </div>
        </div>
        <div className='d-flex col-12 gap-2 mx-auto my-4'>
          <button className='col-6 btn full-btns' type='button'>
            Add
          </button>
          <button
            className='col-6 btn btn-outline-primary show-more-btns'
            type='button'
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

const Star = ({ onRate, onHoverIn, onHoverOut, full }) => {
  return (
    <span
      style={{ cursor: 'pointer' }}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? <FaStar style={{ color: '#ffc107' }} /> : <FaRegStar />}
    </span>
  );
};

export default AddBook;
