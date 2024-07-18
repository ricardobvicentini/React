import { useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import GenreBtns from './components/Navbar/GenreBtns';
import Hero from './components/Hero';
import CardBox from './components/CardBox';
import Card from './components/Card';
import ShowMoreBtn from './components/ShowMoreBtn';
import bookData from './db/bookData';

const App = () => {
  /* const [bookNum, setBookNum] = useState(4); */
  const [books, setBooks] = useState(bookData);
  const [query, setQuery] = useState('');

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }
  console.log(books);
  console.log(query);

  /* const homeBooks = bookData.slice(0, bookNum); */
  const genreItems = [...new Set(bookData.map((item) => item.genre))];
  const filteredBooks = books.filter(
    ({ title, author }) =>
      title.toLowerCase().includes(query.toLowerCase()) ||
      author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='App'>
      <NavBar query={query} onQueryChange={handleQueryChange}>
        <GenreBtns genreItems={genreItems} />
      </NavBar>
      <Hero />
      <CardBox>
        {filteredBooks.map(
          ({ image, title, author, genre, pages, stars }, i) => (
            <Card
              key={i}
              image={image}
              title={title}
              author={author}
              genre={genre}
              pages={pages}
              stars={stars}
            />
          )
        )}
      </CardBox>
      {/* <ShowMoreBtn setBookNum={setBookNum} /> */}
    </div>
  );
};

export default App;
