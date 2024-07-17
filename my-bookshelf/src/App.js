import { useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import GenreBtns from './components/Navbar/GenreBtns';
import Hero from './components/Hero';
import CardBox from './components/CardBox';
import Card from './components/Card';
import ShowMoreBtn from './components/ShowMoreBtn';

const App = () => {
  const [bookNum, setBookNum] = useState(4);
  const homeBooks = bookData.slice(0, bookNum);
  const genreItems = [...new Set(bookData.map((item) => item.genre))];

  return (
    <div className='App'>
      <NavBar>
        <GenreBtns genreItems={genreItems} />
      </NavBar>
      <Hero />
      <CardBox>
        {homeBooks.map(({ image, title, author, genre, pages, stars }, i) => (
          <Card
            key={i}
            image={image}
            title={title}
            author={author}
            genre={genre}
            pages={pages}
            stars={stars}
          />
        ))}
      </CardBox>
      <ShowMoreBtn setBookNum={setBookNum} />
    </div>
  );
};

export default App;
