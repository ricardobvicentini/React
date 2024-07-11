import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CardBox from './components/CardBox';
import Card from './components/Card';
import bookData from './bookData';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <CardBox>
        {bookData.map(({ image, title, author, genre, pages }, i) => (
          <Card
            key={i}
            image={image}
            title={title}
            author={author}
            genre={genre}
            pages={pages}
          />
        ))}
      </CardBox>
    </div>
  );
};

export default App;
