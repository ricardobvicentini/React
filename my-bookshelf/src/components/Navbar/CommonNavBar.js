import { Link } from 'react-router-dom';
import { FaCircleLeft } from 'react-icons/fa6';

const CommonNavBar = () => {
  return (
    <>
      <nav
        className='navbar navbar-expand fixed-top '
        /* style={{ backgroundColor: '#fcf8e6' }} */
      >
        <div className='container px-4'>
          <Link className='navbar-brand mx-0 fw-bold fs-4' to='/'>
            My Book<span style={{ color: '#ffc107' }}>s</span>helf
          </Link>
          <Link to='/'>
            <button className='btn btn-warning ms-auto' type='button'>
              <FaCircleLeft />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default CommonNavBar;
