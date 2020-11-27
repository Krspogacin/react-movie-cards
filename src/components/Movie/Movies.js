import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import Form from './Form';

export default class Movies extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      movies: [],
    };

    this.addNewElement = this.addNewElement.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
    }));
  }

  addNewElement = (item) => {
    const newArray = this.state.movies.slice();
    newArray.push(item);
    this.setState(() => ({
      movies: newArray,
    }));
    console.log(newArray);
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="mt-5 d-flex justify-content-center">
          <Form addItem={this.addNewElement} />
        </div>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}
