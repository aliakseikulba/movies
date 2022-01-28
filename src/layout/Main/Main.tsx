import React, {useEffect, useState} from 'react';
import {Movies} from '../../components/Movies/Movies';
import s from './Main.module.css';
import {Preloader} from '../../components/Preloader/Preloader';
import {Search} from '../../components/Search/Search';
import {Container} from '@mui/material';
import axios from 'axios';


type ResponseType = {
  data: {
    Search: Array<MovieType>
  }
}
export type MovieType = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export type Filter = 'all' | 'movie' | 'series'

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  const searchMovies = (movieName: string, type: Filter = 'all') => {
    setIsLoading(true);
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}${type !== 'all'
      ? `&type=${type}` : ''}`)
      .then((res: ResponseType) => {
        setMovies(res.data.Search);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=lebowski`)
      .then((res: ResponseType) => {
        setMovies(res.data.Search);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Search searchMovies={searchMovies}/>
        {
          isLoading
            ? <Preloader/>
            : (
              <div className={s.mainContainer}>
                <Movies movies={movies}/>
              </div>
            )
        }
      </Container>
    </>
  );
};

export {Main};