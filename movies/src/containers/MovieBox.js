import React, { Component } from 'react';
import MovieList from '../components/MovieList';

class MovieBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ id: 1, title: 'The Royal Tennenbaums', text: 'I love cats'}]
    };
  }

  render() {
    return (
      <div className="movie-box">
      <h2>Movie List</h2>
      <MovieList data={this.state.data} />
    </div>
  );
  }
}

export default MovieBox;
