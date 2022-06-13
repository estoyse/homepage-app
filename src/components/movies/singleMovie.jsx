import React from 'react';

const SingleMovie = ({ movie }) => {
  return (
    <div className="single-movie">
      <div className="img-container">
        <img src={`http://image.tmdb.org/t/p/w300${movie.image}`} alt="" />
        <div className="score">
          <p>{movie.score}</p>
        </div>
        <div className="description">
          <p>{movie.description}</p>
        </div>
      </div>
      <div className="titles">
        <h4>{movie.title}</h4>
      </div>
    </div>
  );
};

export default SingleMovie;
