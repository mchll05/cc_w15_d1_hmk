import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className='movie'>
        <h4 className='movie-title'>{this.title}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Movie;
