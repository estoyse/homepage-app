import React, { useEffect, useState } from 'react';
import MoviesContainer from './moviesContainer';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [genres, setGenres] = useState([]);

  const MOVIES_KEY = '16892b606f2da7210ea7d0be241ffe5b';

  const fetchData = async () => {
    setLoading(true);

    const URL = Number(selectedGenre)
      ? `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIES_KEY}&page=${page}&with_genres=${selectedGenre}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIES_KEY}&page=${page}`;

    await fetch(URL).then((res) =>
      res.json().then((data) => {
        let rowMovies = [];
        data.results.forEach((result) => {
          let movie = {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: result.release_date,
            image: result.poster_path,
            score: result.vote_average,
            genres: result.genre_ids,
          };
          rowMovies.push(movie);
        });
        setMovies(rowMovies);
        setLoading(false);
      })
    );
  };
  const fetchGenres = async () => {
    const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIES_KEY}`;
    await fetch(URL).then((res) =>
      res
        .json()
        .then((data) => setGenres([{ name: 'All', id: 0 }, ...data.genres]))
    );
  };

  useEffect(fetchData, [page, selectedGenre]);
  useEffect(fetchGenres, []);

  return (
    <MoviesContainer
      movies={movies}
      page={page}
      setPage={setPage}
      genres={genres}
      selectedGenre={selectedGenre}
      setSelectedGenre={setSelectedGenre}
      loading={loading}
    />
  );
};

export default Movies;
