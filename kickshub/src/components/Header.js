export default function Header({ onClickCart }) {
  return (
    <header>
      <div className='logo'>
        <img
          src='assets/images/sneaker-logo.png'
          alt='Sneaker with wings'
        ></img>
      </div>
      <div className='search-icon'>
        <div className='search'>
          <input
            className='search__input'
            name='search__input'
            type='text'
          ></input>
          <i className='bx bx-search'></i>
        </div>
        <div onClick={onClickCart} className='icon-cart'>
          <i className='bx bx-cart'></i>
          <span>0</span>
        </div>
      </div>
    </header>
  );
}
