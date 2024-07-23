import { useState, useMemo } from 'react';
import NavBar from './components/Navbar/NavBar';
import GenreBtns from './components/Navbar/GenreBtns';
import Hero from './components/Hero';
import Results from './components/Results';
import CardBox from './components/CardBox';
import Card from './components/Card';
import ShowMoreBtn from './components/ShowMoreBtn';
import bookData from './db/bookData';

const App = () => {
  const [bookNum, setBookNum] = useState(4);
  const [books, setBooks] = useState(bookData);
  const [query, setQuery] = useState('');
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [tempCheckedGenres, setTempCheckedGenres] = useState([]);
  const [tempCheckedStars, setTempCheckedStars] = useState([]);
  const [checkedFilters, setCheckedFilters] = useState({
    star: [],
    genre: [],
  });

  /* Search */
  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  /* Genre */
  function handleGenreChange(e) {
    setQuery('');
    const selectedGenre = e.target.value;
    if (e.target.checked) {
      setTempCheckedGenres([...tempCheckedGenres, selectedGenre]);
    } else {
      setTempCheckedGenres(
        tempCheckedGenres.filter((item) => item !== selectedGenre)
      );
    }
  }

  /*  Star */
  function handleStarChange(e) {
    const selectedStar = e.target.value;
    if (e.target.checked) {
      setTempCheckedStars([...tempCheckedStars, selectedStar]);
    } else {
      setTempCheckedStars(
        tempCheckedStars.filter((item) => item !== selectedStar)
      );
    }
  }

  /* Apply Filters */
  function handleApplyFilters() {
    setCheckedGenres(tempCheckedGenres);
    setCheckedFilters({
      ...checkedFilters,
      star: tempCheckedStars,
      genre: tempCheckedGenres,
    });
  }

  /* Clear Filters */
  function handleClearFilters() {
    setTempCheckedGenres([]);
    setCheckedGenres([]);
    setCheckedFilters({
      ...checkedFilters,
      star: '',
      genre: '',
    });
  }

  const booksBySearch = useMemo(
    () =>
      books.filter(
        ({ title, author }) =>
          title.toLowerCase().includes(query.toLowerCase()) ||
          author.toLowerCase().includes(query.toLowerCase())
      ),
    [books, query]
  );

  const booksByGenres = useMemo(() => {
    if (checkedGenres.length === 0) {
      return books;
    } else {
      return books.filter(({ genre }) =>
        checkedGenres.some((checkedGenre) => genre.includes(checkedGenre))
      );
    }
  }, [checkedGenres, books]);

  const genreItems = [...new Set(bookData.map((item) => item.genre))];
  const booksToBeFiltered = query ? booksBySearch : booksByGenres;

  console.log(checkedFilters);

  return (
    <div className='App'>
      <NavBar
        query={query}
        onQueryChange={handleQueryChange}
        tempCheckedStars={tempCheckedStars}
        onStarChange={handleStarChange}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
      >
        <GenreBtns
          genreItems={genreItems}
          tempCheckedGenres={tempCheckedGenres}
          onGenreChange={handleGenreChange}
        />
      </NavBar>
      <Hero />
      {
        <Results
          query={query}
          checkedGenres={checkedGenres}
          booksToBeFiltered={booksToBeFiltered}
        />
      }
      <CardBox>
        {booksToBeFiltered
          .map(({ image, title, author, genre, pages, stars }, i) => (
            <Card
              key={i}
              image={image}
              title={title}
              author={author}
              genre={genre}
              pages={pages}
              stars={stars}
            />
          ))
          .slice(0, bookNum)}
      </CardBox>
      <ShowMoreBtn setBookNum={setBookNum} />
    </div>
  );
};

export default App;
