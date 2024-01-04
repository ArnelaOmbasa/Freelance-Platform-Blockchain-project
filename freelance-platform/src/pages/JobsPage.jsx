import React from 'react';
import {
  makeStyles,
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
  Grid,
} from '@material-ui/core';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/background.png';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(3),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    justifyContent: 'center',
    paddingBottom: theme.spacing(2),
  },
}));

const mockJobs = [
    {
        id: 'job1',
        title: 'Frontend Developer',
        description: 'Looking for a skilled frontend developer with React experience.'
      },
      {
        id: 'job2',
        title: 'Backend Developer',
        description: 'Seeking a backend developer familiar with Node.js and MongoDB.'
      },
      {
        id: 'job3',
        title: 'Full Stack Developer',
        description: 'Full stack developer needed for a new exciting project using MERN stack.'
      },
      {
        id: 'job4',
        title: 'UX/UI Designer',
        description: 'UX/UI Designer with a knack for modern design principles.'
      },
      {
        id: 'job5',
        title: 'Project Manager',
        description: 'Experienced project manager to lead software development projects.'
      },
      {
        id: 'job6',
        title: 'DevOps Engineer',
        description: 'DevOps engineer with experience in AWS and Kubernetes.'
      }
      ,{
        id: 'job1',
        title: 'Frontend Developer',
        description: 'Looking for a skilled frontend developer with React experience.'
      },
      {
        id: 'job2',
        title: 'Backend Developer',
        description: 'Seeking a backend developer familiar with Node.js and MongoDB.'
      },
      {
        id: 'job3',
        title: 'Full Stack Developer',
        description: 'Full stack developer needed for a new exciting project using MERN stack.'
      },
      {
        id: 'job4',
        title: 'UX/UI Designer',
        description: 'UX/UI Designer with a knack for modern design principles.'
      },
      {
        id: 'job5',
        title: 'Project Manager',
        description: 'Experienced project manager to lead software development projects.'
      },
      {
        id: 'job6',
        title: 'DevOps Engineer',
        description: 'DevOps engineer with experience in AWS and Kubernetes.'
      }
];

const JobPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          {mockJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {job.title}
                  </Typography>
                  <Typography>
                    {job.description}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size="small" color="primary">
                    View Job
                  </Button>
                  <Button size="small" color="primary">
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default JobPage;
