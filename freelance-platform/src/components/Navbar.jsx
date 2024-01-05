// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

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
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

function Navbar({ isLoggedIn, onLogout }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/'); // Redirect to the landing page after logging out
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          JOBS.com
        </Typography>
        <Link to="/" className={classes.link}>
          <Button color="inherit" className={classes.button}>
            Home
          </Button>
        </Link>
        <Link to="/jobs" className={classes.link}>
          <Button color="inherit" className={classes.button}>
            Jobs
          </Button>
        </Link>
        {isLoggedIn ? (
          <Button color="inherit" className={classes.button} onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Link to="/login" className={classes.link}>
            <Button color="inherit" className={classes.button}>
              Login
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
