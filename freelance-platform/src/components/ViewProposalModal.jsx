import React from 'react';
import { makeStyles, Modal, Box, Typography, Button } from '@material-ui/core';
import { getSubmittedProposalMethod } from '../web3/contractInteraction';
import { useState, useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  proposalText: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));




const ViewProposalModal = ({ open, handleClose, jobId }) => {
  const classes = useStyles();
  const [proposalDetails, setProposalDetails] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchProposalDetails = async () => {
      if (!jobId) {
        console.error('Job ID is missing');
        setProposalDetails('No job selected.');
        return;
      }
      setLoading(true);
      try {
        const details = await getSubmittedProposalMethod(jobId);
        setProposalDetails(details || 'No proposal has been submitted for this job yet.');
      } catch (error) {
        console.error("Error fetching proposal details:", error);
        setProposalDetails('Failed to load proposal details.');
      }
      setLoading(false);
    };
 
    if (open) {
      fetchProposalDetails();
    }
 
    return () => {
      if (!open) {
        setProposalDetails('');
      }
    };
  }, [open, jobId]);
 
 
  const onClose = () => {
    console.log("Closing modal...");
    setProposalDetails(''); 
    setLoading(false);
    handleClose();
  };




  const renderContent = () => {
    if (loading) {
      return "Loading proposal details...";
    } else {
      return proposalDetails;
    }
  };




  return (
    <Modal open={open} onClose={onClose}
      aria-labelledby="view-proposal-modal-title"
      aria-describedby="view-proposal-modal-description"
    >
      <Box className={classes.modalBox}>
        <Typography id="view-proposal-modal-title" variant="h6" gutterBottom>
          Proposal
        </Typography>
        <Typography id="view-proposal-modal-description" gutterBottom className={classes.proposalText}>
          {renderContent()}
        </Typography>
        <div className={classes.buttonContainer}>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </div>
       
      </Box>
    </Modal>
  );
};




export default ViewProposalModal;









