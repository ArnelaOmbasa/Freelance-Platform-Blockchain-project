// components/HowItWorksCard.js

import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    textAlign: 'center',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
  },
  icon: {
    fontSize: '3rem',
    color: '#4a90e2',
  },
  title: {
    marginTop: 8,
    fontWeight: 600,
  },
  description: {
    marginTop: 8,
  },
});

const HowItWorksCard = ({ icon: Icon, title, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Icon className={classes.icon} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HowItWorksCard;
