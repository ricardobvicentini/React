import { cardData } from '../cardData.js';

export default function SneakerCard({
  hidden,
  onClickCard,
  sneakerCardData,
  colorId,
}) {
  return (
    <div className={`sneakerCard ${hidden && 'hidden'}`}>
      <div className='sneakerCard__img'>
        <img src={sneakerCardData.photo} alt={sneakerCardData.altText}></img>
      </div>
      <div className='sneakerCard__info'>
        <i onClick={onClickCard} className='bx bx-x-circle'></i>
        <h2>{sneakerCardData.name}</h2>
        <p>{sneakerCardData.description}</p>
        <div className='color-wrapper'>
          <p>Colors</p>
          {cardData[colorId].colors.flatMap((colorObj) => (
            <div
              className='sneakerCard__colors'
              style={{
                '--c1': Object.values(colorObj)[0][0],
                '--c2': Object.values(colorObj)[0][1],
              }}
            ></div>
          ))}
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
          <p className='sneakerCard__price'>{sneakerCardData.price}</p>
        </div>
        <button className='sneakerCard__btn'>Add to cart</button>
      </div>
    </div>
  );
}
