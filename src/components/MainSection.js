import React from 'react';
import './MainSection.css';
import MovieCard from './MovieCard';

const movies = [
  {
    id: 1,
    name: 'The Shawshank',
    genre: 'Drama',
    director: 'Frank Darabont',
    imdb: 9.3,
    finance: '$58.3M',
    description: 'Two imprisoned men bond over a number of years...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAORn2QCTSgeqnuHYdJgTKX_KrWX_tkzTF1Q&s'
  },
  {
    id: 2,
    name: 'The Godfather',
    genre: 'Crime, Drama',
    director: 'Francis Ford Coppola',
    imdb: 9.2,
    finance: '$134.8M',
    description: 'The aging patriarch of an organized crime dynasty...',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  },
  {
    id: 3,
    name: 'The Dark Knight',
    genre: 'Action, Crime, Drama',
    director: 'Christopher Nolan',
    imdb: 9.0,
    finance: '$1.005B',
    description: 'When the menace known as the Joker emerges...',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s'
  },
  {
    id: 4,
    name: '12 Angry Men',
    genre: 'Drama',
    director: 'Sidney Lumet',
    imdb: 9.0,
    finance: '$2M',
    description: 'A jury holdout attempts to prevent a miscarriage of justice...',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDhjMjE4NDItZTkyOC00NjIwLWI0MDQtYTJhZjY2YzlkMDQ0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg'
  },
  {
    id: 5,
    name: 'Schindler\'s List',
    genre: 'Biography, Drama, History',
    director: 'Steven Spielberg',
    imdb: 8.9,
    finance: '$322.2M',
    description: 'In German-occupied Poland during World War II...',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
  }
];

function MainSection() {
  return (
    <div className="MainSection">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MainSection;
