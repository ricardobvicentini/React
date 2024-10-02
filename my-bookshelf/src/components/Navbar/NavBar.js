import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const NavBar = ({ children, query, onQueryChange }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth); // Update state with new width
  }
  const showRef = useRef(null);
  useEffect(() => {
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    // Initial call to set the width
    handleResize();
    if (width > 576 && showRef.current.classList.contains('show')) {
      showRef.current.classList.remove('show');
    }
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

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
          <div
            className='row mx-0 collapse navbar-dark navbar-collapse'
            id='nav'
            ref={showRef}
          >
            <div
              className='col-8 py-2 d-flex justify-content-end'
              role='search'
            >
              <div
                className='input text-center '
                /* style={{ width: 'min(20rem, 80%)' }} */
                style={{ width: '80%' }}
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
              className='col d-flex ms-auto mt-sm-0 p-0'
              style={{ maxWidth: '10rem' }}
            >
              <button
                className='btn ms-auto full-btns'
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
