import { fetchFilms } from 'api/fetchApi';
import SearchForm from 'components/SearchForm/SearchForm';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  const location = useLocation();

  const onSubmit = useCallback(async queryParam => {
    if (!queryParam) {
      return;
    } else {
      fetchFilms(queryParam)
        .then(resp => {
          setCurrentMovies(resp.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    onSubmit(queryParam);
  }, [onSubmit, queryParam]);

  return (
    <main>
      <SearchForm onSubmit={updateQueryString} />

      <ul>
        {currentMovies &&
          currentMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title ?? movie.name}{' '}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Movies;
