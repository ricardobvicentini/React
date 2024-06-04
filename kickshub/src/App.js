import { sneakerData } from './sneakerData';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        {sneakerData.map((sneaker) => (
          <Card sneaker={sneaker} key={sneaker.id} />
        ))}
      </main>
      <SneakerCard />
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
      <div className='search-icon'>
        <input id='search__input' type='text'></input>
        <i class='bx bx-search'></i>
        <div className='icon-cart'>
          <i className='bx bx-cart'></i>
          <span>0</span>
        </div>
      </div>
    </header>
  );
}

function Card({ sneaker }) {
  return (
    <div className='card__wrapper'>
      <div className='card__img'>
        <img src={sneaker.photo} alt={sneaker.altText}></img>
      </div>
      <div className='card__info'>
        <h2>{sneaker.name}</h2>
        <p>{sneaker.description}</p>
        <p className='card__price'>{sneaker.price}</p>
        <button className='card__btn'>Add to cart</button>
      </div>
    </div>
  );
}

function SneakerCard() {
  return (
    <div className='sneakerCard hidden'>
      <div className='sneakerCard__img'>
        <img
          src='assets/images/nike-max-90-black-blue.jpg'
          alt='Nike Air Max 90 Black and Blue'
        ></img>
      </div>
      <div className='sneakerCard__info'>
        <h2>Nike Air Max 90</h2>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <div className='sneakerCard__colors'></div>
        <p className='sneakerCard__sizes'>36 37 38 39 40 41 42</p>
        <div className='sneakerCard__quantity-price'>
          <div className='quantity__wrapper'>
            <button>-</button>
            <input type='number'></input>
            <button>+</button>
          </div>
          <p className='sneakerCard__price'>$ 150.00</p>
        </div>
        <button className='sneakerCard__btn'>Add to cart</button>
      </div>
    </div>
  );
}
