// components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    background: 'white',
    color: 'black',
  },
  button: {
    color: 'blue',
    margin: theme.spacing(1),
  },
}));

function Navbar({ isLoggedIn, onLogout }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.title}>
        JOBS.com
        </Typography>
        
        <Button color="inherit" className={classes.button}>
          Home
        </Button>
        <Button color="inherit" className={classes.button}>
          Jobs
        </Button>
        {isLoggedIn ? (
          <Button color="inherit" className={classes.button} onClick={onLogout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" className={classes.button}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
