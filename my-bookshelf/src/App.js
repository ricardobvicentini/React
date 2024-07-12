import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CardBox from './components/CardBox';
import Card from './components/Card';
import ShowMoreBtn from './components/ShowMoreBtn';
import bookData from './bookData';

const App = () => {
  const [bookNum, setBookNum] = useState(4);
  const homeBooks = bookData.slice(0, bookNum);

  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <CardBox>
        {homeBooks.map(({ image, title, author, genre, pages }, i) => (
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
      <ShowMoreBtn setBookNum={setBookNum} />
    </div>
  );
};

export default App;
