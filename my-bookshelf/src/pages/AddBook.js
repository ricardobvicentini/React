import CommonNavBar from '../components/Navbar/CommonNavBar';
import { FaStar } from 'react-icons/fa';

const AddBook = () => {
  return (
    <div>
      <CommonNavBar />
      <div
        className='container'
        style={{ width: 'min(30rem, 85vw)', marginTop: '9rem' }}
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
          <input type='number' id='pages' className='form-control' />
        </div>
        <div className='mb-3'>
          <label htmlFor='stars' className='form-label'>
            Stars
          </label>
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar style={{ color: '#ffc107' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
