import { getMovieReviews } from 'api/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [currentReviews, setCurrentReviews] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getMovieReviews(id).then(response => {
      if (response.data.results.length <= 0) {
        setCurrentReviews(null);
        return;
      }
      setCurrentReviews(response.data.results);
    });
  }, [id]);

  return (
    <div>
      {currentReviews ? (
        <ul>
          {currentReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, there are no reviews</p>
      )}
    </div>
  );
};

export default Reviews;
