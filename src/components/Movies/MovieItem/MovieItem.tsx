import React from 'react';
import {Card, CardContent, CardMedia, Grid, Paper, Typography} from '@mui/material';
import {MovieType} from '../../../layout/Main/Main';
import s from './MovieItem.module.css';

type MovieItemPT = MovieType;

const MovieItem = ({Year, Title, Type, Poster}: MovieItemPT) => {

  return (
    <>
      <Grid item>
        <Paper elevation={8}>
          <Card sx={{width: 320}}>
            <CardMedia
              component="img"
              alt="movie poster"
              height="400"
              image={Poster === 'N/A' ? 'https://dummyimage.com/320x400/363945/e8e9f7.jpg&text=movie+poster' : Poster}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Title}
              </Typography>
              <div className={s.movieDescription}>
                <Typography variant="body2" color="text.secondary">
                  {Type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Year}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default MovieItem;