import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import Form from './Form';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
  }

  addNewElement = item => {
    const newArray = this.state.movies.slice();
    newArray.push(item);
    this.setState(() => ({
      movies: newArray,
    }));
    console.log(newArray);
  };

  deleteMovie = id => {
    this.setState(prevState => ({
      movies: prevState.movies.filter(movie => movie.id !== id),
    }));
  };

  starClick = (number, id) => {
    const movies = this.state.movies;
    const movieIndex = movies.findIndex(movie => movie.id === id);

    movies[movieIndex].ratings.push(number);
    let sum = 0;
    movies[movieIndex].ratings.forEach(rating => {
      sum += rating;
    });
    movies[movieIndex].rating = sum / movies[movieIndex].ratings.length;
    this.setState(() => ({
      movies: movies,
    }));
  };

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="mt-5 d-flex justify-content-center">
          <Form addItem={this.addNewElement} />
        </div>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList movies={this.state.movies} removeItem={this.deleteMovie} starClick={this.starClick} />
          </div>
        </div>
      </div>
    );
  }
}
