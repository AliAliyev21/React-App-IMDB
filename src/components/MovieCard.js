import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <div className="cinema-image">
        <img src={movie.imgSrc} alt={movie.name} />
      </div>
      <div className="cinema-details">
        <h2>{movie.name}</h2>
        <p>Genre: {movie.genre}</p>
        <p>Director: {movie.director}</p>
        <p>IMDB: {movie.imdb}</p>
        <p>Finance: {movie.finance}</p>
        <p>Description: {movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
