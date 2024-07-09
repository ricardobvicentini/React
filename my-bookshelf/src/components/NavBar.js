const NavBar = () => {
  return (
    <nav className='navbar fixed-top bg-body-tertiary'>
      <div className='container-sm'>
        <a className='navbar-brand' href='/'>
          My Book<span style={{ color: 'red' }}>s</span>helf
        </a>
        <form className='d-flex' role='search'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
