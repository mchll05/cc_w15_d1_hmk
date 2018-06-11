import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    return (
      <div className='movie-list'>
      <Movie title='The Nightmare Before Christmas'></Movie>
      <Movie title='The Royal Tennenbaums'></Movie>
      <Movie title='All About Eve'></Movie>
      <Movie title='His Girl Friday'></Movie>
      <Movie title='Heathers'></Movie>
    </div>
    );
  }
}

export default MovieList;
