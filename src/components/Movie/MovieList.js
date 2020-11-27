import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, removeItem, starClick) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} removeItem={removeItem} starClick={starClick} />
    ))}
  </div>
);

const MovieList = ({ movies, removeItem, starClick }) => <div>{getMovies(movies, removeItem, starClick)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
