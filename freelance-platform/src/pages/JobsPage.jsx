import React, { useState } from 'react';
import {
  makeStyles,
  Grid,
  Button,
} from '@material-ui/core';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import AddJobModal from '../components/AddJobModal';
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
  addButton: {
    margin: theme.spacing(2),
  },
}));

const mockJobs = [
  {
    id: 'job1',
    title: 'Frontend Developer',
    description: 'Seeking an experienced Frontend Developer with expertise in React and Redux. Familiarity with modern frontend build pipelines and tools required.',
    payment: '500 ETH'
  },
  {
    id: 'job2',
    title: 'Backend Developer',
    description: 'Looking for a skilled Backend Developer with proficiency in Node.js and Express. Knowledge of MongoDB and RESTful API development is a must.',
    payment: '750 ETH'
  },
  {
    id: 'job3',
    title: 'Full Stack Developer',
    description: 'Full Stack Developer needed to build a responsive web application. Experience with both frontend (React) and backend (Node.js, Express) technologies required.',
    payment: '1200 ETH'
  },
  {
    id: 'job4',
    title: 'UX/UI Designer',
    description: 'UX/UI Designer needed to redesign our mobile application. Strong portfolio showcasing design thinking and problem-solving skills required.',
    payment: '400 ETH'
  },
  {
    id: 'job5',
    title: 'Project Manager',
    description: 'Experienced Project Manager needed for managing a cross-functional team in a fast-paced environment. Agile and Scrum experience preferred.',
    payment: '1000 ETH'
  },
  {
    id: 'job6',
    title: 'DevOps Engineer',
    description: 'Seeking a DevOps Engineer with experience in AWS, Docker, and Kubernetes. Familiarity with CI/CD pipelines and automation tools is essential.',
    payment: '900 ETH'
  },
  {
    id: 'job7',
    title: 'Project Manager',
    description: 'Experienced project manager to lead software development projects.'
  },
  {
    id: 'job8',
    title: 'DevOps Engineer',
    description: 'DevOps engineer with experience in AWS and Kubernetes.'
  },
  
];

// Remove the userStatus prop if you are hardcoding it for testing
const JobPage = () => {
  const classes = useStyles();
  const [isAddJobOpen, setAddJobOpen] = useState(false);

  // Hardcode userStatus for testing
  const userStatus = 'admin'; // Change this as needed for testing

  const handleOpenAddJob = () => setAddJobOpen(true);
  const handleCloseAddJob = () => setAddJobOpen(false);

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        {userStatus === 'admin' && (
          <Button 
            className={classes.addButton} 
            color="primary" 
            onClick={handleOpenAddJob}>
              Add Job
          </Button>
        )}
        <Grid container spacing={3} justifyContent="center">
          {mockJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={job.id}>
              <JobCard job={job} userStatus={userStatus} />
            </Grid>
          ))}
        </Grid>
        <AddJobModal open={isAddJobOpen} onClose={handleCloseAddJob} />
      </div>
    </>
  );
};

export default JobPage;
