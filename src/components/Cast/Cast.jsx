import { getMovieCredits } from 'api/fetchApi';
import { BASE_IMG_URL } from 'api/imgUrl';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [currentCredits, setCurrentCredits] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getMovieCredits(id).then(response => {
      if (response.data.cast <= 0) {
        setCurrentCredits(null);
        return;
      }
      setCurrentCredits(response.data.cast);
    });
  }, [id]);

  return (
    <div>
      {currentCredits ? (
        <ul>
          {currentCredits.map(({ name, character, profile_path }) => {
            return (
              <li key={name}>
                <img
                  src={
                    profile_path
                      ? BASE_IMG_URL + profile_path
                      : 'https://via.placeholder.com/240x320'
                  }
                  alt={name}
                  width="240"
                />
                <div>Name: {name}</div>
                <div>Character: {character}</div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, we don't have any information about actors</p>
      )}
    </div>
  );
};

export default Cast;
