import { sneakerData } from './sneakerData';
import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import SneakerCard from './components/SneakerCard';
import CartTab from './components/CardTab';

export default function App() {
  const [hidden, setHidden] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [sneakerCard, setSneakerCard] = useState([]);

  function handleClickCard() {
    setHidden(!hidden);
  }

  function handleClickCart() {
    setShowCart(!showCart);
  }

  function handleSetCard(id) {
    const newSneakerData = sneakerData.filter((sneaker) => sneaker.id === id);
    setSneakerCard(newSneakerData[0]);
  }

  return (
    <div
      className={`app ${showCart && 'active-cart'}`}
      style={{ pointerEvents: `${hidden === true ? 'auto' : 'none'}` }}
    >
      <Header onClickCart={handleClickCart} />
      <main>
        {sneakerData.map((sneaker) => (
          <Card
            onClickCard={handleClickCard}
            onSetCard={handleSetCard}
            sneaker={sneaker}
            id={sneaker.id}
            key={sneaker.id}
          />
        ))}
      </main>
      <SneakerCard
        onClickCard={handleClickCard}
        hidden={hidden}
        sneakerCardData={sneakerCard}
      />
      <CartTab onClickCart={handleClickCart} />
      <div className={`overlay ${hidden && 'hidden'}`}></div>
    </div>
  );
}
