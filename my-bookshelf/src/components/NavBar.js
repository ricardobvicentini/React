import { FaSearch, FaFilter } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm fixed-top bg-body-tertiary'>
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
        <div className='collapse navbar-collapse justify-content-end' id='nav'>
          <form
            className='py-2 ms-auto'
            role='search'
            style={{ width: 'min(20rem, 60%)' }}
          >
            {/* <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-outline-warning' type='submit'>
            Search
          </button> */}
            <div class='input-group'>
              <input
                type='text'
                className='form-control'
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
            <button className='btn btn-warning ms-auto'>
              <FaFilter />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
