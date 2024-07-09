import { FaSearch, FaFilter } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className='navbar fixed-top bg-body-tertiary'>
      <div className='container-sm'>
        <a className='navbar-brand mx-0' href='/'>
          My Book<span style={{ color: 'red' }}>s</span>helf
        </a>
        <form className='d-flex' role='search'>
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
            <div className='input-group-text' id='btnGroupAddon2' type='submit'>
              <FaSearch />
            </div>
          </div>
        </form>

        <button className='btn btn-warning dropdown-toggle' type='button'>
          <FaFilter />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
