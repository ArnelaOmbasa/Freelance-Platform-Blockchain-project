import React, { useState,useEffect } from 'react';
import initializeWeb3 from '../web3/initializeWeb3';
import { getAllJobsMethod } from '../web3/contractInteraction'; // Replace with your actual import path
import {
  makeStyles,
  Grid,
  Button,
} from '@material-ui/core';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import AddJobModal from '../components/AddJobModal';
import backgroundImage from '../assets/background.png';
































































const adminAddress = '0x242F358146E1C6EB2df23C70E6917Fc6403E4229'; // Admin address
































































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
    padding: theme.spacing(1), // Increase padding
    fontSize: '0.8rem', // Larger font size
    minWidth: '125px', // Minimum width
    backgroundColor: '#009ACD', // A bright blue color
 
}}));
































































































// Remove the userStatus prop if you are hardcoding it for testing
const JobPage = () => {
  const classes = useStyles();
  const [isAddJobOpen, setAddJobOpen] = useState(false);
  const [jobs, setJobs] = useState([]); // State to store jobs
  const [currentUserAddress, setCurrentUserAddress] = useState('');
































  useEffect(() => {
    const initialize = async () => {
      const web3 = initializeWeb3();
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setCurrentUserAddress(accounts[0].toLowerCase());
        }
      }
    };
    initialize();
  }, []);








  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJobsMethod();
        const jobIds = response[0];
        const jobData = response[1];


        if (Array.isArray(jobIds) && Array.isArray(jobData)) {
          const jobsWithIds = jobData.map((job, index) => ({
            ...job,
            id: jobIds[index].toString(),
            isProposalSubmitted: job.freelancer !== "0x0000000000000000000000000000000000000000",
            payment: job.payment.toString() // Convert BigInt to string if necessary
          }));
          setJobs(jobsWithIds);
        } else {
          console.error('Invalid response format:', response);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };


    fetchJobs();
  }, []);
 
 
 
































































  const handleOpenAddJob = () => setAddJobOpen(true);
  const handleCloseAddJob = () => setAddJobOpen(false);
































  const isAdmin = currentUserAddress === adminAddress.toLowerCase();
































  return (
    <>
      <Navbar />
      <div className={classes.root}>
        {isAdmin && (
          <Button
            className={classes.addButton}
            variant="contained"
            color="primary"
            onClick={handleOpenAddJob}>
              Add Job
          </Button>
        )}
        <Grid container spacing={3} justifyContent="center">
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <JobCard job={job} userStatus={isAdmin ? 'admin' : 'user'} />
            </Grid>
          ))}
        </Grid>
        <AddJobModal open={isAddJobOpen} onClose={handleCloseAddJob} />
      </div>
    </>
  );
};
































export default JobPage;





























































































