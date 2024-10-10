import { Link } from 'react-router-dom';
import { FaCircleLeft } from 'react-icons/fa6';

const CommonNavBar = ({ selectedLanguage, languages, onLanguage }) => {
  return (
    <>
      <nav
        className='navbar navbar-expand'
        /* style={{ backgroundColor: '#fcf8e6' }} */
      >
        <div className='container px-4'>
          <Link className='navbar-brand mx-0 fw-bold fs-4' to='/'>
            My Book<span style={{ color: '#ffc107' }}>s</span>helf
          </Link>
          <div className='d-flex'>
            <Link to='/'>
              <button
                className='btn btn-warning ms-auto full-btns'
                type='button'
                style={{ height: '100%' }}
              >
                <FaCircleLeft />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CommonNavBar;
