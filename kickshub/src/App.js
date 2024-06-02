const sneakerData = [
  {
    id: 1,
    photo: 'assets/images/nike-max-90-black-blue.jpg',
    altText: 'Nike Air Max 90 Black and Blue',
    name: 'Nike Air Max 90',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    price: '$ 150.00',
  },
  {
    id: 2,
    photo: 'assets/images/nike-max-excee-black-white.jpg',
    altText: 'Nike Air Max Excee Black and White',
    name: 'Nike Air Max Excee',
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    price: '$ 199.00',
  },
];

export default function App() {
  return (
    <div className='app'>
      {sneakerData.map((sneaker) => (
        <Card sneaker={sneaker} key={sneaker.id} />
      ))}
    </div>
  );
}

function Card({ sneaker }) {
  return (
    <div className='card__wrapper'>
      <div>
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
