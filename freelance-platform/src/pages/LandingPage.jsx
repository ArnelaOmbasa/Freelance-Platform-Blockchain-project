import React from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import Navbar from '../components/Navbar';
import HowItWorksCard from '../components/HowItWorksCard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import background from '../assets/background.png';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  heroContent: {
    position: 'relative',
    color: '#fff',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'center',
    width: '100%',
    margin: '0',
    padding: theme.spacing(8, 0, 6),
    boxSizing: 'border-box',
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
  howItWorksTitle: {
    textAlign: 'center',
    margin: theme.spacing(4, 0),
  },
  howItWorksSection: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  icon: {
    fontSize: '3rem',
    color: theme.palette.primary.main,
  },
}));

const LandingPage = () => {
  const classes = useStyles();

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
            Jobs is a curated job board of the best jobs for developers, designers, and marketers in the tech industry.
          </Typography>
        </div>
      </div>
      <div className={classes.howItWorksSection}>
      <Typography variant="h4" className={classes.howItWorksTitle}>
        How it works?
      </Typography>
        <Grid container spacing={4} justify="center" className={classes.cardGrid}>
          <HowItWorksCard
            icon={AccountCircleIcon}
            title="Login"
            description="Login using your MetaMask account to continue."
          />
          <HowItWorksCard
            icon={SearchIcon}
            title="Find Job"
            description="Find the job that best suits your skills and interests."
          />
          <HowItWorksCard
            icon={ThumbUpAltIcon}
            title="Apply"
            description="Apply to job postings and start working on exciting projects."
          />
        </Grid>
      </div>
    </div>
  );
};
export default LandingPage;
