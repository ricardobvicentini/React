import { FaSearch, FaFilter } from 'react-icons/fa';

const NavBar = () => {
  return (
    <>
      <nav
        className='navbar navbar-expand-sm fixed-top'
        style={{ backgroundColor: '#fcf8e6' }}
      >
        <div className='container'>
          <a className='navbar-brand mx-0 fw-bold fs-4' href='/'>
            My Book<span style={{ color: 'red' }}>s</span>helf
          </a>
          <button
            className='navbar-toggler my-2'
            data-bs-toggle='collapse'
            data-bs-target='#nav'
            aria-controls='nav'
            aria-label='Expand Navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='nav'
          >
            <form
              className='py-2 ms-auto'
              role='search'
              style={{ width: 'min(20rem, 60%)' }}
            >
              <div className='input-group'>
                <input
                  type='text'
                  className='search-btn form-control'
                  placeholder='Search...'
                  aria-label='Input group example'
                  aria-describedby='btnGroupAddon2'
                />
                <div
                  className='input-group-text'
                  id='btnGroupAddon2'
                  type='submit'
                >
                  <FaSearch />
                </div>
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
        tabindex='-1'
        id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
        style={{ maxWidth: '70vw' }}
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasRightLabel'>
            Filters
          </h5>
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
                    className='accordion-button'
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
                  className='accordion-collapse collapse show'
                  aria-labelledby='genre'
                  data-bs-parent='#accordion'
                >
                  <div className='accordion-body'>
                    <div className='vstack gap-2'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='história'
                        />
                        <label className='form-check-label' htmlFor='história'>
                          História
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='autoajuda'
                        />
                        <label className='form-check-label' htmlFor='autoajuda'>
                          Autoajuda
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
