import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';

const NavBar = ({ children, query, onQueryChange }) => {
  return (
    <>
      <nav
        className='navbar navbar-expand-sm fixed-top '
        /* style={{ backgroundColor: '#fcf8e6' }} */
      >
        <div className='container px-4'>
          <Link className='navbar-brand mx-0 fw-bold fs-4' to='/'>
            My Book<span style={{ color: '#ffc107' }}>s</span>helf
          </Link>

          <button
            className='navbar-dark navbar-toggler my-2'
            data-bs-toggle='collapse'
            data-bs-target='#nav'
            aria-controls='nav'
            aria-label='Expand Navigation'
          >
            <span className='navbar-dark navbar-toggler-icon'></span>
          </button>
          <div className='mx-0 collapse navbar-dark navbar-collapse' id='nav'>
            <div
              className='py-2 ms-auto d-flex justify-content-end'
              role='search'
            >
              <div
                className='input text-center'
                style={{ width: 'min(20rem, 80%)' }}
              >
                <input
                  value={query}
                  onChange={onQueryChange}
                  type='search'
                  className='search-input form-control'
                  placeholder='Search...'
                />
              </div>
            </div>

            <div
              className='d-flex ms-auto mt-sm-0 p-0'
              /* style={{ maxWidth: '10rem' }} */
            >
              <button
                className='btn btn-warning ms-auto'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasRight'
                aria-controls='offcanvasRight'
              >
                <FaFilter />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Sidebar Filter */}
      <>{children}</>
    </>
  );
};

export default NavBar;
