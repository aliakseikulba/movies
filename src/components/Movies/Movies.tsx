import React from 'react';
import MovieItem from './MovieItem/MovieItem';
import {Grid} from '@mui/material';
import {MovieType} from '../../layout/Main/Main';


type MoviePT = {
  movies: Array<MovieType>
};

const Movies = ({movies}: MoviePT) => {

  return (
    <>
      <Grid container spacing={6} justifyContent="center">
        {movies ?
          movies.map(movie => {
            return <MovieItem key={movie.imdbID} {...movie}/>;
          })
          : <h2>Nothing Found</h2>
        }
      </Grid>
    </>
  );
};

export {Movies};