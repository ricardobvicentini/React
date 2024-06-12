/* import { data } from './data';
import { useState } from 'react'; */

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <SneakerCard />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className='logo'>
        <img
          src='assets/images/sneaker-logo.png'
          alt='Sneaker with wings'
        ></img>
      </div>

      <div className='icon-cart'>
        <i className='bx bx-cart'></i>
        <span>0</span>
      </div>
    </header>
  );
}

function SneakerCard() {
  return (
    <div className='sneakerCard'>
      <div className='sneakerCard__img'>
        <img
          src='assets/images/nike-max-90-black-blue.jpg'
          alt='Nike Air Max 90 Black and Blue'
        ></img>
      </div>
      <div className='sneakerCard__info'>
        <h2>Name</h2>
        <p>Description</p>
        <div className='color-wrapper'>
          <p>Colors</p>

          <div className='sneakerCard__colors'></div>
        </div>
        <div className='size-wrapper'>
          <p>Sizes</p>
          <p className='sneakerCard__sizes'>
            <span></span>
          </p>
        </div>
        <div className='sneakerCard__quantity-price'>
          <div className='quantity__wrapper'>
            <button>-</button>
            <input type='number'></input>
            <button>+</button>
          </div>
          <p className='sneakerCard__price'>Price</p>
        </div>
        <button className='sneakerCard__btn'>Add to cart</button>
      </div>
    </div>
  );
}

export default App;
