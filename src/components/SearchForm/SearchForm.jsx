import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [currentQuery, setCurrentQuery] = useState();

  const handleInput = e => {
    setCurrentQuery(e.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    onSubmit(currentQuery);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie by title"
        onChange={handleInput}
        value={currentQuery}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  queryParam: PropTypes.string,
  onChange: PropTypes.func,
};
