import { FaFilter } from 'react-icons/fa';

const NavBar = ({ children, query, onQueryChange }) => {
  return (
    <>
      <nav
        className='navbar navbar-expand-sm fixed-top '
        /* style={{ backgroundColor: '#fcf8e6' }} */
      >
        <div className='container px-4'>
          <a className='navbar-brand mx-0 fw-bold fs-4' href='/'>
            My Book<span style={{ color: '#ffc107' }}>s</span>helf
          </a>
          <button
            className='navbar-dark navbar-toggler my-2'
            data-bs-toggle='collapse'
            data-bs-target='#nav'
            aria-controls='nav'
            aria-label='Expand Navigation'
          >
            <span className='navbar-dark navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-dark navbar-collapse gap-5' id='nav'>
            <form
              className='py-2 ms-auto'
              role='search'
              style={{ width: 'min(20rem, 60%)' }}
            >
              <div className='input-group'>
                <input
                  value={query}
                  onChange={onQueryChange}
                  type='search'
                  className='search-input form-control'
                  placeholder='Search...'
                  aria-label='Input group example'
                  aria-describedby='btnGroupAddon2'
                />
              </div>
            </form>

            <div className='d-flex ms-auto mt-2 mt-sm-0'>
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
