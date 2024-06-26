import { data } from './data';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [itemId, setItemId] = useState(1);

  function handleSetId(id) {
    setItemId(id);
  }

  function handleClickCart() {
    setShowCart(!showCart);
  }

  return (
    <div className={`app ${showCart && 'active-cart'}`}>
      <Header onClickCart={handleClickCart} cartActive={showCart} />
      <main>
        <SneakerCard onSetId={handleSetId} id={itemId} cartActive={showCart} />
      </main>
      <CartTab onClickCart={handleClickCart} />
    </div>
  );
}

function Header({ onClickCart, cartActive }) {
  return (
    <header style={{ pointerEvents: cartActive ? 'none' : 'auto' }}>
      <div className='logo'>
        <img
          src='assets/images/sneaker-logo.png'
          alt='Sneaker with wings'
        ></img>
      </div>

      <div onClick={onClickCart} className='icon-cart'>
        <i className='bx bx-cart'></i>
        <span>0</span>
      </div>
    </header>
  );
}

function SneakerCard({ onSetId, id, cartActive }) {
  const [quantityByColor, setQuantityByColor] = useState(0);

  function handleIncrementQty() {
    setQuantityByColor(quantityByColor + 1);
  }

  function handleDecrementQty() {
    setQuantityByColor(
      quantityByColor > 0 ? quantityByColor - 1 : quantityByColor
    );
  }

  return (
    <div
      className='sneakerCard'
      style={{ pointerEvents: cartActive ? 'none' : 'auto' }}
    >
      <div className='sneakerCard__img'>
        <img src={data[id - 1].img} alt={data[id - 1].altText}></img>
      </div>
      <div className='sneakerCard__info'>
        <h2>{data[id - 1].name}</h2>
        <p>{data[id - 1].description}</p>
        <div className='color-wrapper'>
          <p>Colors</p>
          {data.map((item, index) => (
            <div
              onClick={() => {
                onSetId(item.id);
              }}
              className='sneakerCard__colors'
              style={{
                '--c1': item.color[0],
                '--c2': item.color[1],
              }}
              key={item.id + '-' + index}
            ></div>
          ))}
        </div>
        <div className='size-wrapper'>
          <p>Sizes</p>
          <p className='sneakerCard__sizes'>
            {data[id - 1].sizes.map((size) => {
              return <span>{size}</span>;
            })}
          </p>
        </div>
        <div className='sneakerCard__quantity-price'>
          <div className='quantity__wrapper'>
            <button onClick={handleDecrementQty}>
              <i className='bx bx-minus-circle'></i>
            </button>
            <input type='text' value={quantityByColor}></input>
            <button onClick={handleIncrementQty}>
              <i className='bx bx-plus-circle'></i>
            </button>
          </div>
          <p className='sneakerCard__price'>${data[id - 1].price}</p>
        </div>
        <button className='sneakerCard__btn'>Add to cart</button>
      </div>
    </div>
  );
}

function CartTab({ onClickCart }) {
  return (
    <div className='cart-tab'>
      <h2>Shopping Cart</h2>
      <div className='cart-tab__products'>Items here</div>
      <div className='cart-tab__btns'>
        <button onClick={onClickCart}>Close</button>
        <button>Check Out</button>
      </div>
    </div>
  );
}

export default App;
