import { useState, useEffect, useMemo } from 'react';
import NavBar from '../components/Navbar/NavBar';
import SidebarFilter from '../components/Navbar/SidebarFilter';
import Hero from '../components/Hero';
import Results from '../components/Results';
import CardBox from '../components/CardBox';
import Card from '../components/Card';
import ShowMoreBtn from '../components/ShowMoreBtn';
import Loader from '../components/Loader';
import bookData from '../db/bookData';

const HomePage = () => {
  const [bookNum, setBookNum] = useState(4);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const originalBooks = bookData;
  const [query, setQuery] = useState('');
  const [tempCheckedFilters, setTempCheckedFilters] = useState({
    tempAlpha: false,
    tempCheckedGenre: [],
    tempCheckedStar: [],
    tempCheckedRoom: [],
  });
  const { tempAlpha, tempCheckedGenre, tempCheckedStar, tempCheckedRoom } =
    tempCheckedFilters;
  const [checkedFilters, setCheckedFilters] = useState({
    alpha: tempAlpha,
    star: tempCheckedStar,
    genre: tempCheckedGenre,
    room: tempCheckedRoom,
  });
  const { alpha, star, genre, room } = checkedFilters;
  const genreItems = [...new Set(bookData.map((item) => item.genre))];
  const roomItems = [...new Set(bookData.map((item) => item.room))];

  useEffect(() => {
    setLoading(true);
    function getBooks() {
      setBooks(bookData);
      setLoading(false);
    }
    getBooks();
  }, []);

  /*    useEffect(() => {
    async function fetchBooks() {
      try {setLoading(true);
      const res = await fetch(`./bookData.json`);
      
      if(!res.ok) throw new Error("Something went wrong!")
      
      const data = await res.json();
      setBooks(data);
      } catch (err) {
        console.error(err.message)
        } finally {
          setLoading(false)
          }
          
          }
          
          fetchBooks();
          }, []); */

  /*   function handleDeleteBook(el) {
            setBooks(books.filter((book) => book.title !== el));
            }
            
            

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

  /* Room */
  function handleRoomChange(e) {
    setQuery('');
    const selectedRoom = e.target.value;
    if (e.target.checked) {
      setTempCheckedFilters((prevFilters) => ({
        ...prevFilters,
        tempCheckedRoom: [...prevFilters.tempCheckedRoom, selectedRoom],
      }));
    } else {
      setTempCheckedFilters((prevFilters) => ({
        ...prevFilters,
        tempCheckedRoom: prevFilters.tempCheckedRoom.filter(
          (item) => item !== selectedRoom
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
      room: tempCheckedRoom,
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
      tempCheckedRoom: [],
    });
    setCheckedFilters({
      alpha: false,
      star: [],
      genre: [],
      room: [],
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
    /* Room filter */
    if (checkedFilters.room.length > 0) {
      filteredBooks = filteredBooks.filter(({ room }) =>
        checkedFilters.room.some((tempCheckedRoom) =>
          room.includes(tempCheckedRoom)
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
            genreItems={genreItems.sort()}
            roomItems={roomItems.sort()}
            alpha={alpha}
            tempAlpha={tempAlpha}
            tempCheckedGenre={tempCheckedGenre}
            tempCheckedStar={tempCheckedStar}
            tempCheckedRoom={tempCheckedRoom}
            onAlphaOrder={handleAlphaOrder}
            onGenreChange={handleGenreChange}
            onStarChange={handleStarChange}
            onRoomChange={handleRoomChange}
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
            room={room}
            booksToBeFiltered={booksToBeFiltered}
          />
        }
        <CardBox>
          {loading ? (
            <Loader />
          ) : (
            booksToBeFiltered
              .map(
                (
                  { bookId, image, title, author, genre, pages, stars, room },
                  i
                ) => (
                  <Card
                    key={i}
                    bookId={bookId}
                    image={image}
                    title={title}
                    author={author}
                    genre={genre}
                    pages={pages}
                    stars={stars}
                    room={room}
                  />
                )
              )
              .slice(0, bookNum)
          )}
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
