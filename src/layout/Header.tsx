import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';

const Header = () => {
  return (
      <AppBar position="static" sx={{backgroundColor: '#363945'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies
          </Typography>
          <Button color="inherit">Repository</Button>
        </Toolbar>
      </AppBar>
  );
};

export {Header};