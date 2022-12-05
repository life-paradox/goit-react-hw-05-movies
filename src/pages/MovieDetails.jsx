import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/fetchApi';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? `/movies`;

  useEffect(() => {
    getMovieDetails(id)
      .then(response => setCurrentMovie(response.data))
      .catch(error => console.assert(error));
  }, [id]);

  return (
    <main>
      <Link to={backLinkHref}>&#129044; Go back</Link>

      {currentMovie && (
        <MovieInfo
          poster_path={currentMovie.poster_path}
          title={currentMovie.title}
          name={currentMovie.name}
          genres={currentMovie.genres}
          release_date={currentMovie.release_date}
          overview={currentMovie.overview}
        />
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from ?? 'movies' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              state={{ from: location.state?.from ?? 'movies' }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </main>
  );
};

export default MovieDetails;
