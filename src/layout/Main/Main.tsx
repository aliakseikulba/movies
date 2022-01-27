import React from 'react';
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

type MainStateType = {
  movies: Array<MovieType>
  isLoading: boolean
}

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component<any, MainStateType> {

  state = {
    movies: [],
    isLoading: true
  };

  searchMovies = (movieName: string, type: string = 'all') => {
    this.setState({isLoading: true});
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}${type !== 'all'
      ? `&type=${type}` : ''}`)
      .then((res: ResponseType) => {
        this.setState({movies: res.data.Search});
        this.setState({isLoading: false});
      });
  };

  componentDidMount() {
    axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=lebowski`)
      .then((res: ResponseType) => {
        this.setState({movies: res.data.Search});
        this.setState({isLoading: false});
      });
  }

  render() {
    const {movies} = this.state;

    return (
      <>
        <Container maxWidth="lg">
          <Search searchMovies={this.searchMovies}/>
          {
            this.state.isLoading
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
  }
}

export {Main};