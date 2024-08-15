import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import AddBook from './pages/AddBook';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/book/:id' element={<BookPage />} />
      <Route path='/add-book' element={<AddBook />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
