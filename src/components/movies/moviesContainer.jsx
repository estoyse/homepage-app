import React from 'react';
import { MoviesStyles } from '../../styles/moviesStyles';
import { SelectStyles } from '../../styles/selectStyles';
import SingleMovie from './singleMovie';
import Loading from '../loading';

const MoviesContainer = ({
  movies,
  page,
  setPage,
  genres,
  selectedGenre,
  setSelectedGenre,
  loading,
}) => {
  return (
    <MoviesStyles>
      <div className="header">
        <div className="left">
          <h3>Movies</h3>
          <div className="genre drop-down">
            <SelectStyles
              defaultValue={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </SelectStyles>
          </div>
        </div>
        <div className="right">
          <button disabled={page <= 1} onClick={() => setPage(--page)}>
            Prev
          </button>
          <button onClick={() => setPage(++page)}>Next</button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="main">
          {movies.map((movie) => (
            <SingleMovie movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </MoviesStyles>
  );
};

export default MoviesContainer;
