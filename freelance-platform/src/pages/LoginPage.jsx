import React, { useEffect, useState } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import Navbar from '../components/Navbar';
import background from '../assets/background.png'; // Ensure this path is correct
import Web3 from 'web3';
import {  useAuth } from '../AuthContext.jsx'; // Go up two levels
import initializeWeb3 from '../web3/initializeWeb3'; // Use a default import








const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jobId","type":"uint256"}],"name":"JobCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":false,"internalType":"address","name":"freelancer","type":"address"}],"name":"JobCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"string","name":"description","type":"string"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"JobPosted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"jobId","type":"uint256"},{"indexed":false,"internalType":"address","name":"freelancer","type":"address"},{"indexed":false,"internalType":"string","name":"proposal","type":"string"}],"name":"ProposalSubmitted","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId","type":"uint256"}],"name":"cancelJob","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId","type":"uint256"}],"name":"completeJob","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllJobs","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"address payable","name":"freelancer","type":"address"},{"internalType":"string","name":"proposal","type":"string"}],"internalType":"struct FreelancePlatform.Job[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId","type":"uint256"}],"name":"getJobDetails","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"address payable","name":"freelancer","type":"address"},{"internalType":"string","name":"proposal","type":"string"}],"internalType":"struct FreelancePlatform.Job","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId","type":"uint256"}],"name":"getSubmittedProposal","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"jobCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"jobs","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"address payable","name":"freelancer","type":"address"},{"internalType":"string","name":"proposal","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"paymentInEth","type":"uint256"}],"name":"postJob","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"jobId","type":"uint256"},{"internalType":"string","name":"proposal","type":"string"}],"name":"submitProposal","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractAddress = '0x23BF2Df81Fe7508D5c7b1496265e9056BD3f46f0';












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




  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const { login } = useAuth();




  useEffect(() => {
    const web3Instance = initializeWeb3();
    if (web3Instance) {
      setWeb3(web3Instance);
      const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
      setContract(contractInstance);
    } else {
      console.error("Web3 is not initialized. Please install MetaMask.");
    }
  }, []);




  const handleLogin = async () => {
    try {
      if (web3) {
        const accounts = await web3.eth.requestAccounts();
        if (accounts.length > 0) {
          setAccounts(accounts);
          console.log('Connected with account:', accounts[0]);
          login(); // Call the login function from your authentication context
        }
      }
    } catch (error) {
      console.error(error);
    }
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









