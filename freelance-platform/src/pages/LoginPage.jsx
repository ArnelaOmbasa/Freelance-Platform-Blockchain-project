import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar';
import background from '../assets/background.png'; // Ensure this path is correct

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  heroContent: {
    color: '#fff',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'center',
    width: '100%',
    padding: theme.spacing(8, 0, 6),
  },
  blueText: {
    color: theme.palette.primary.main,
  },
  titleBackground: {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    margin: '0 auto',
  },
  subtitleBackground: {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    maxWidth: '80%',
    margin: '0 auto',
  },
  loginButton: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const handleLogin = () => {
    // Logic to trigger MetaMask login should go here
    console.log('Logging in via MetaMask');
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.heroContent}>
        <div className={classes.titleBackground}>
          <Typography component="h1" variant="h2" gutterBottom className={classes.blueText}>
            Jobs for Developers, Designers, and Marketers
          </Typography>
        </div>
        <div className={classes.subtitleBackground}>
          <Typography variant="h5" className={classes.blueText}>
            Connect with your MetaMask wallet to continue.
          </Typography>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          className={classes.loginButton}
          onClick={handleLogin}
        >
          Click here to login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
