import { FaCircleLeft } from 'react-icons/fa6';

const CommonNavBar = () => {
  return (
    <>
      <nav
        className='navbar navbar-expand fixed-top '
        /* style={{ backgroundColor: '#fcf8e6' }} */
      >
        <div className='container px-4'>
          <a className='navbar-brand mx-0 fw-bold fs-4' href='/'>
            My Book<span style={{ color: '#ffc107' }}>s</span>helf
          </a>
          <button className='btn btn-warning ms-auto' type='button'>
            <FaCircleLeft />
          </button>
        </div>
      </nav>
    </>
  );
};

export default CommonNavBar;
