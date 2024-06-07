import { sneakerData } from './sneakerData';
import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import SneakerCard from './components/SneakerCard';
import CartTab from './components/CardTab';

export default function App() {
  const [hidden, setHidden] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [sneakerCardId, setSneakerCardId] = useState();

  function handleClickCard() {
    setHidden(!hidden);
  }

  function handleClickCart() {
    setShowCart(!showCart);
  }

  function handleSetCard(id) {
    setSneakerCardId(id);
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
        sneakerCardId={sneakerCardId}
      />
      <CartTab onClickCart={handleClickCart} />
      <div className={`overlay ${hidden && 'hidden'}`}></div>
    </div>
  );
}
