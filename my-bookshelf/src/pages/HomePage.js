import { useState, useMemo } from 'react';
import NavBar from '../components/Navbar/NavBar';
import SidebarFilter from '../components/Navbar/SidebarFilter';
import Hero from '../components/Hero';
import Results from '../components/Results';
import CardBox from '../components/CardBox';
import Card from '../components/Card';
import ShowMoreBtn from '../components/ShowMoreBtn';
import bookData from '../db/bookData';

const HomePage = () => {
  const [bookNum, setBookNum] = useState(4);
  const [books, setBooks] = useState(bookData);
  const originalBooks = bookData;
  const [query, setQuery] = useState('');
  const [tempCheckedFilters, setTempCheckedFilters] = useState({
    tempAlpha: false,
    tempCheckedGenre: [],
    tempCheckedStar: [],
  });
  const { tempAlpha, tempCheckedGenre, tempCheckedStar } = tempCheckedFilters;
  const [checkedFilters, setCheckedFilters] = useState({
    alpha: tempAlpha,
    star: tempCheckedStar,
    genre: tempCheckedGenre,
  });
  const { alpha, star, genre } = checkedFilters;
  const genreItems = [...new Set(bookData.map((item) => item.genre))];

  /*   function handleDeleteBook(el) {
    setBooks(books.filter((book) => book.title !== el));
  } */

  /* Search */
  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  /*  Alpha order */
  function handleAlphaOrder() {
    setTempCheckedFilters((prevFilters) => ({
      ...prevFilters,
      tempAlpha: !prevFilters.tempAlpha,
    }));
  }

  /* Genre */
  function handleGenreChange(e) {
    setQuery('');
    const selectedGenre = e.target.value;
    if (e.target.checked) {
      setTempCheckedFilters((prevFilters) => ({
        ...prevFilters,
        tempCheckedGenre: [...prevFilters.tempCheckedGenre, selectedGenre],
      }));
    } else {
      setTempCheckedFilters((prevFilters) => ({
        ...prevFilters,
        tempCheckedGenre: prevFilters.tempCheckedGenre.filter(
          (item) => item !== selectedGenre
        ),
      }));
    }
  }

  /*  Star */
  function handleStarChange(e) {
    setQuery('');
    const selectedStar = e.target.value;
    if (e.target.checked) {
      setTempCheckedFilters((prevFilters) => ({
        ...prevFilters,
        tempCheckedStar: [...prevFilters.tempCheckedStar, selectedStar],
      }));
    } else {
      setTempCheckedFilters((prevFilters) => ({
        ...prevFilters,
        tempCheckedStar: prevFilters.tempCheckedStar.filter(
          (item) => item !== selectedStar
        ),
      }));
    }
  }

  /* Apply Filters */
  function handleApplyFilters() {
    setCheckedFilters({
      alpha: tempAlpha,
      star: tempCheckedStar,
      genre: tempCheckedGenre,
    });
    /* Alpha conditional */
    if (tempAlpha) {
      setBooks(
        [...originalBooks].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else {
      setBooks(originalBooks);
    }
  }

  /* Clear Filters */
  function handleClearFilters() {
    setTempCheckedFilters({
      tempAlpha: false,
      tempCheckedGenre: [],
      tempCheckedStar: [],
    });
    setCheckedFilters({
      alpha: false,
      star: [],
      genre: [],
    });
    setBooks(originalBooks);
  }

  /* Books using search */
  const booksBySearch = useMemo(
    () =>
      books.filter(
        ({ title, author }) =>
          title.toLowerCase().includes(query.toLowerCase()) ||
          author.toLowerCase().includes(query.toLowerCase())
      ),
    [books, query]
  );

  /* Books using filters */
  const booksByFilters = useMemo(() => {
    let filteredBooks = books;

    /* Genre filter */
    if (checkedFilters.genre.length > 0) {
      filteredBooks = filteredBooks.filter(({ genre }) =>
        checkedFilters.genre.some((tempCheckedGenre) =>
          genre.includes(tempCheckedGenre)
        )
      );
    }

    /* Star filter */
    if (checkedFilters.star.length > 0) {
      filteredBooks = filteredBooks.filter(({ stars }) =>
        checkedFilters.star.includes(stars)
      );
    }

    return filteredBooks;
  }, [books, checkedFilters]);

  const booksToBeFiltered = query ? booksBySearch : booksByFilters;

  return (
    <>
      <div className='App'>
        <NavBar query={query} onQueryChange={handleQueryChange}>
          <SidebarFilter
            genreItems={genreItems}
            alpha={alpha}
            tempAlpha={tempAlpha}
            tempCheckedGenre={tempCheckedGenre}
            tempCheckedStar={tempCheckedStar}
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

        <ShowMoreBtn
          bookNum={bookNum}
          setBookNum={setBookNum}
          booksToBeFiltered={booksToBeFiltered}
        />
      </div>
    </>
  );
};

export default HomePage;
