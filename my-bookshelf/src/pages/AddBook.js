import CommonNavBar from '../components/Navbar/CommonNavBar';
import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const AddBook = () => {
  const [stars, setStars] = useState(1);
  const [tempStars, setTempStars] = useState(1);

  return (
    <div>
      <CommonNavBar />
      <div
        className='container'
        style={{ width: 'min(30rem, 85vw)', marginTop: '2rem' }}
      >
        <div className='mb-3'>
          <label htmlFor='formFile' className='form-label'>
            Image
          </label>
          <input className='form-control' type='file' id='formFile' />
        </div>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input type='text' id='title' className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor='author' className='form-label'>
            Author
          </label>
          <input type='text' id='author' className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor='Genre' className='form-label'>
            Genre
          </label>
          <input type='text' id='genre' className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <textarea
            className='form-control'
            id='description'
            rows='3'
          ></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor='pages' className='form-label'>
            Pages
          </label>
          <input type='number' min='0' id='pages' className='form-control' />
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
