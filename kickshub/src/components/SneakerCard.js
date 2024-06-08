import { sneakerData } from '../sneakerData.js';
import { useState } from 'react';

export default function SneakerCard({ hidden, onClickCard, sneakerCardId }) {
  const [colorId, setColorId] = useState(0);
  return (
    <div className={`sneakerCard ${hidden && 'hidden'}`}>
      <div className='sneakerCard__img'>
        <img
          src={sneakerData[sneakerCardId - 1 || 0].photo[colorId]}
          alt={sneakerData[sneakerCardId - 1 || 0].altText[colorId]}
        ></img>
      </div>
      <div className='sneakerCard__info'>
        <i onClick={onClickCard} className='bx bx-x-circle'></i>
        <h2>{sneakerData[sneakerCardId - 1 || 0].name}</h2>
        <p>{sneakerData[sneakerCardId - 1 || 0].description}</p>
        <div className='color-wrapper'>
          <p>Colors</p>
          {sneakerData[sneakerCardId - 1 || 0].colors.flatMap(
            (colorObj, index) => {
              const key = Object.keys(colorObj)[0] + '-' + index;
              return (
                <div
                  onClick={() => {
                    setColorId(index);
                  }}
                  className='sneakerCard__colors'
                  style={{
                    '--c1': Object.values(colorObj)[0][0],
                    '--c2': Object.values(colorObj)[0][1],
                  }}
                  key={key}
                ></div>
              );
            }
          )}
        </div>
        <div className='size-wrapper'>
          <p>Sizes</p>
          <p className='sneakerCard__sizes'>
            <span>36</span> <span>37</span> <span>38</span> <span>39</span>{' '}
            <span>40</span> <span>41</span> <span>42</span>
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
