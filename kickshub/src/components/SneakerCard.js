import { sneakerData } from '../sneakerData.js';
import { useState } from 'react';

export default function SneakerCard({ hidden, onClickCard, sneakerCardId }) {
  const [colorId, setColorId] = useState(0);

  const selectedSneakerData = Object.values(
    sneakerData[sneakerCardId - 1 || 0]
  );

  const image = selectedSneakerData[colorId + 1];
  const colors = selectedSneakerData
    .slice(1, selectedSneakerData.length - 4)
    .map((colorObj) => colorObj.color);

  return (
    <div className={`sneakerCard ${hidden && 'hidden'}`}>
      <div className='sneakerCard__img'>
        <img src={image.img} alt={image.altText}></img>
      </div>
      <div className='sneakerCard__info'>
        <i
          onClick={() => {
            onClickCard();
            setColorId(0);
          }}
          className='bx bx-x-circle'
        ></i>
        <h2>{sneakerData[sneakerCardId - 1 || 0].name}</h2>
        <p>{sneakerData[sneakerCardId - 1 || 0].description}</p>
        <div className='color-wrapper'>
          <p>Colors</p>
          {colors.map((colorObj, index) => {
            const key = colorObj + '-' + index;
            return (
              <div
                onClick={() => {
                  setColorId(index);
                }}
                className='sneakerCard__colors'
                style={{
                  '--c1': colorObj[0],
                  '--c2': colorObj[1],
                }}
                key={key}
              ></div>
            );
          })}
        </div>
        <div className='size-wrapper'>
          <p>Sizes</p>
          <p className='sneakerCard__sizes'>
            {/* {sizes.map((size, index) => {
              const key = size + '-' + index;
              return <span key={key}>{size}</span>;
            })} */}
          </p>
        </div>
        <div className='sneakerCard__quantity-price'>
          <div className='quantity__wrapper'>
            <button>-</button>
            <input type='number'></input>
            <button>+</button>
          </div>
          <p className='sneakerCard__price'>
            {sneakerData[sneakerCardId - 1 || 0].price}
          </p>
        </div>
        <button className='sneakerCard__btn'>Add to cart</button>
      </div>
    </div>
  );
}
