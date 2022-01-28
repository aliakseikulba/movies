import React, {KeyboardEvent, ChangeEvent, FC, useState} from 'react';
import {Button, FormControlLabel, Radio, RadioGroup, TextField} from '@mui/material';
import s from './Search.module.css';
import {Filter} from '../../layout/Main/Main';

type SearchProps = {
  searchMovies: (movieName: string, type: Filter) => void
}


const Search: FC<SearchProps> = ({searchMovies}) => {

  const [searchName, setSearchName] = useState<string>('');
  const [searchType, setSearchType] = useState<Filter>('all');


  const onChangeFormHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchName(e.currentTarget.value);
  };

  const onEnterPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      searchMovies(searchName, searchType);
    }
  };
  const onClickHandler = () => {
    if (searchName !== '') {
      searchMovies(searchName, searchType);
    }
  };
  const onFilterChangeHandler = (e: any) => {
    setSearchType(e.currentTarget.value);
    searchMovies(searchName, e.currentTarget.value);
  };

  return (
    <div className={s.inputField}>
      <TextField id="standard-basic"
                 fullWidth={true}
                 color="secondary"
                 label="Search"
                 variant="standard"
                 value={searchName}
                 onChange={onChangeFormHandler}
                 onKeyPress={onEnterPressHandler}/>
      <div className={s.btn}>
        <Button variant="contained"
                color="secondary"
                sx={{margin: '10px 0'}}
                onClick={onClickHandler}
        >
          Search
        </Button>
      </div>
      <RadioGroup row aria-label="search params" name="row-radio-buttons-group">
        <FormControlLabel value="all"
                          control={<Radio color="secondary"/>}
                          label="All"
                          onChange={onFilterChangeHandler}
                          checked={searchType === 'all'}
        />
        <FormControlLabel value="movie"
                          control={<Radio color="secondary"/>}
                          label="Movies"
                          onChange={onFilterChangeHandler}
                          checked={searchType === 'movie'}
        />
        <FormControlLabel value="series"
                          control={<Radio color="secondary"/>}
                          label="Series"
                          onChange={onFilterChangeHandler}
                          checked={searchType === 'series'}
        />
      </RadioGroup>
    </div>
  );
};

export {Search};

