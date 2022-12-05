import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import Layout from './Layout/Layout';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { getGenres } from 'api/fetchApi';
import { useEffect } from 'react';
// import * as SC from './App.styles';

const App = () => {
  const saveGenres = () => {
    getGenres().then(response => {
      if (!localStorage.getItem('genres')) {
        localStorage.setItem('genres', JSON.stringify(response.data.genres));
        return;
      } else if (
        localStorage.getItem('genres') === JSON.stringify(response.data.genres)
      ) {
        return;
      } else {
        localStorage.setItem('genres', JSON.stringify(response.data.genres));
        return;
      }
    });
  };

  useEffect(() => {
    saveGenres();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
