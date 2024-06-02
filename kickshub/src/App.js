export default function App() {
  return (
    <div className='app'>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className='card__wrapper'>
      <div>
        <img
          src='assets/images/nike-max-90-black-blue.jpg'
          alt='Nike Air Max 90 Black and Blue'
        ></img>
      </div>
      <div className='card__info'>
        <h2>Nike Air Max 90</h2>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <button>Add</button>
      </div>
    </div>
  );
}
