import { FaFilter, FaStar } from 'react-icons/fa';

const NavBar = ({ children, query, onQueryChange }) => {
  const starNum = 5;

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
      <div
        className='offcanvas offcanvas-end'
        tabIndex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
        style={{ maxWidth: '70vw' }}
      >
        <div className='offcanvas-header'>
          <h4 className='offcanvas-title' id='offcanvasRightLabel'>
            Filters
          </h4>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          {/* Alphabetical */}
          <div className='vstack gap-3'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='alphabetical'
              />
              <label className='form-check-label' htmlFor='alphabetical'>
                Alphabetical order
              </label>
            </div>
            {/* Genre */}
            <div className='accordion' id='accordion'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='genre'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Genre
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse'
                  aria-labelledby='genre'
                  data-bs-parent='#accordion'
                >
                  <div className='accordion-body'>
                    <div
                      className='vstack gap-2 overflow-auto'
                      style={{ height: '10rem' }}
                    >
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Star Rating */}
            {Array.from({ length: starNum }, (_, i) => (
              <div
                key={starNum - i}
                className='form-check d-flex align-items-center'
              >
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id={starNum - i + '-star'}
                />
                <label
                  className='form-check-label ps-2'
                  htmlFor={starNum - i + '-star'}
                >
                  {Array.from({ length: starNum - i }, (_, i) => (
                    <FaStar key={starNum - i} style={{ color: '#ffc107' }} />
                  ))}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Filter btns */}
        <div className='d-grid gap-2 col-6 mx-auto my-4'>
          <button className='btn btn-outline-warning' type='button'>
            Clear
          </button>
          <button className='btn btn-warning' type='button'>
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
