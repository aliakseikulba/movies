import React from 'react';
import MovieItem from './MovieItem/MovieItem';
import {Grid} from '@mui/material';
import {MovieType} from '../../layout/Main/Main';
import s from './Movies.module.css';


type MoviePT = {
  movies: Array<MovieType>
};

const Movies = ({movies}: MoviePT) => {

  return (
    <>
      <Grid container spacing={6}>
        {movies ?
          movies.map(movie => {
            return <MovieItem key={movie.imdbID} {...movie}/>;
          })
          : <h2 className={s.nothingFound}>Nothing Found</h2>
        }
      </Grid>
    </>
  );
};

export {Movies};