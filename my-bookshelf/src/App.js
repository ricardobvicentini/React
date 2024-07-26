import { useState, useMemo } from 'react';
import NavBar from './components/Navbar/NavBar';
import SidebarFilter from './components/Navbar/SidebarFilter';
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
  const [tempCheckedGenres, setTempCheckedGenres] = useState([]);
  const [tempCheckedStars, setTempCheckedStars] = useState([]);
  const [checkedFilters, setCheckedFilters] = useState({
    alpha: false,
    star: [],
    genre: [],
  });

  /*   function handleDeleteBook(el) {
    setBooks(books.filter((book) => book.title !== el));
  } */

  /* Search */
  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleAlphaOrder() {
    setCheckedFilters({ ...checkedFilters, alpha: !checkedFilters.alpha });
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
    setQuery('');
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
    setCheckedFilters({
      ...checkedFilters,
      star: tempCheckedStars,
      genre: tempCheckedGenres,
    });
  }

  /* Clear Filters */
  function handleClearFilters() {
    setTempCheckedGenres([]);
    setTempCheckedStars([]);
    setCheckedFilters({
      ...checkedFilters,
      alpha: false,
      star: [],
      genre: [],
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

  const booksByFilters = useMemo(() => {
    let filteredBooks = books;

    /* Genre filter */
    if (checkedFilters.genre.length > 0) {
      filteredBooks = filteredBooks.filter(({ genre }) =>
        checkedFilters.genre.some((tempCheckedGenres) =>
          genre.includes(tempCheckedGenres)
        )
      );
    }

    /* Star filter */
    if (checkedFilters.star.length > 0) {
      filteredBooks = filteredBooks.filter(({ stars }) =>
        checkedFilters.star.includes(stars)
      );
    }

    /* Alpha order */
    if (checkedFilters.alpha) {
      filteredBooks = filteredBooks.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return filteredBooks;
  }, [books, checkedFilters]);

  const genreItems = [...new Set(bookData.map((item) => item.genre))];
  const { alpha, star, genre } = checkedFilters;
  const booksToBeFiltered = query ? booksBySearch : booksByFilters;

  console.log(checkedFilters.alpha);

  return (
    <div className='App'>
      <NavBar query={query} onQueryChange={handleQueryChange}>
        <SidebarFilter
          genreItems={genreItems}
          tempCheckedGenres={tempCheckedGenres}
          tempCheckedStars={tempCheckedStars}
          alpha={alpha}
          onAlphaOrder={handleAlphaOrder}
          onGenreChange={handleGenreChange}
          onStarChange={handleStarChange}
          onApplyFilters={handleApplyFilters}
          onClearFilters={handleClearFilters}
        />
      </NavBar>
      <Hero />
      {
        <Results
          query={query}
          star={star}
          genre={genre}
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
