import React, { Component } from 'react';
import MovieList from '../components/MovieList';

class MovieBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
            { id: 1, title: 'The Royal Tennenbaums', text: 'The Royal Tennenbaums'},
            { id: 2, title: 'All About Eve', text: 'All About Eve'},
            { id: 3, title: 'His Girl Friday', text: 'His Girl Friday'},
            { id: 4, title: 'The Nightmare Before Christmas', text: 'The Nightmare Before Christmas'}]
    };
  }

  render() {
    return (
      <div className="movie-box">
      <h2>Movie List</h2>
      <MovieList data={this.state.data} />
      <button onClick={ this.showtimes }>Showtimes</button>
    </div>
  );
  }
}

export default MovieBox;
