import { getPopularFilms } from 'api/fetchApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopularFilms().then(response => {
      setTrendFilms(response.data.results);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendFilms.length > 0 &&
          trendFilms.map(film => (
            <li key={film.id}>
              <Link to={`movies/${film.id}`} state={{ from: location }}>
                {film.name ?? film.title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Home;
