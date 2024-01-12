import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';



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

function Navbar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    console.log("Setting up event listener for accountsChanged");
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        console.log("MetaMask account disconnected.");
        logout();
        navigate('/');
      }
    };
  
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
  
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);
  
  

  const handleLogoutClick = () => {
    logout();
    navigate('/');
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
