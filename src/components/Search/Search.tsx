import React, {KeyboardEvent, ChangeEvent} from 'react';
import {Button, FormControlLabel, Radio, RadioGroup, TextField} from '@mui/material';
import s from './Search.module.css';

type SearchPT = {
  searchMovies: (movieName: string, type: string) => void
}
type SearchST = {
  search: string
  type: 'all' | 'movie' | 'series'
}

class Search extends React.Component<SearchPT, SearchST> {

  state: SearchST = {
    search: 'lebowski',
    type: 'all',
  };

  onChangeFormHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    this.setState({search: e.currentTarget.value});
  };

  onEnterPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  onClickHandler = () => {
    if (this.state.search !== '') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  onFilterChangeHandler = (e: any) => {
    console.log(e.currentTarget.value);
    this.setState(() => ({type: e.target.value}));
    this.props.searchMovies(this.state.search, e.currentTarget.value);
  };

  render() {

    return (
      <div className={s.inputField}>
        <TextField id="standard-basic"
                   fullWidth={true}
                   color="secondary"
                   label="Search"
                   variant="standard"
                   value={this.state.search}
                   onChange={this.onChangeFormHandler}
                   onKeyPress={this.onEnterPressHandler}/>
        <div className={s.btn}>
          <Button variant="contained"
                  color="secondary"
                  sx={{margin: '10px 0'}}
                  onClick={this.onClickHandler}
          >
            Search
          </Button>
        </div>
        <RadioGroup row aria-label="search params" name="row-radio-buttons-group">
          <FormControlLabel value="movie"
                            control={<Radio color="secondary"/>} label="Movies"
                            onChange={this.onFilterChangeHandler}
                            checked={this.state.type === 'movie'}/>
          <FormControlLabel value="series"
                            control={<Radio color="secondary"/>} label="Series"
                            onChange={this.onFilterChangeHandler}
                            checked={this.state.type === 'series'}/>
          <FormControlLabel value="all"
                            control={<Radio color="secondary"/>} label="All"
                            onChange={this.onFilterChangeHandler}
                            checked={this.state.type === 'all'}/>
        </RadioGroup>
      </div>
    );
  }
}

export {Search};

