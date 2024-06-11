import { useState } from 'react';

export default function Header({ onClickCart }) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <header>
      <div className='logo'>
        <img
          src='assets/images/sneaker-logo.png'
          alt='Sneaker with wings'
        ></img>
      </div>
      <div className='search-icon'>
        <form className='search'>
          <input
            onChange={({ target }) => setSearchValue(target.value)}
            className='search__input'
            name='search__input'
            type='search'
            placeholder='Search products'
            value={searchValue}
            required
            autoComplete='off'
          ></input>
          <button type='submit'>
            <i className='bx bx-search'></i>
          </button>
        </form>
      </div>
      <div onClick={onClickCart} className='icon-cart'>
        <i className='bx bx-cart'></i>
        <span>0</span>
      </div>
    </header>
  );
}
