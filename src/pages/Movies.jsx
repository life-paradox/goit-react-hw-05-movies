import { fetchFilms } from 'api/fetchApi';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const Movies = () => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  const location = useLocation();

  const navigate = useNavigate();

  const onSubmit = ({ queryParam }) => {
    console.log(queryParam);
    fetchFilms(queryParam)
      .then(resp => {
        setCurrentMovies(resp.data.results);
        navigate(`?query=${queryParam}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (queryParam === '') {
      return;
    } else {
      onSubmit({ queryParam });
    }
  }, []);

  return (
    <main>
      <SearchForm
        onSubmit={onSubmit}
        queryParam={queryParam}
        onChange={updateQueryString}
      />

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
