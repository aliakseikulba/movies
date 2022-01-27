import React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <AppBar position="static" color="primary"
            sx={{ top: 'auto', bottom: 0, backgroundColor: '#363945'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CopyrightIcon fontSize='small' sx={{margin: '0 10px'}}/>
        <Typography variant="body1" component="div">
          {new Date().getFullYear()} Copyright Text
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export {Footer};