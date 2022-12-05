import { BASE_IMG_URL } from 'api/imgUrl';
import PropTypes from 'prop-types';

const MovieInfo = ({
  poster_path,
  title,
  name,
  genres,
  release_date,
  overview,
}) => {
  return (
    <div className="movieCard">
      <img
        src={
          !poster_path
            ? 'https://via.placeholder.com/300x425'
            : BASE_IMG_URL + poster_path
        }
        alt={title ?? name}
        width="300"
      />
      <div className="info">
        <h1>
          {title ?? name}
          &#40;{release_date.slice(0, 4)}&#41;
        </h1>
        <h2>Overview</h2>
        <p>{overview}</p>

        <h3>Genres</h3>
        {genres.map(genre => {
          return <span key={genre.name}>{genre.name}, </span>;
        })}
      </div>
    </div>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.array,
  release_date: PropTypes.string,
};
