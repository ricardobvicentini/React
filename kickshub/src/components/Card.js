export default function Card({ sneaker, onClickCard, onSetCard, id }) {
  return (
    <div
      onClick={() => {
        onClickCard();
        onSetCard(id);
      }}
      className='card__wrapper'
    >
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
