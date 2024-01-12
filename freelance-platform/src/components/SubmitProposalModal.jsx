import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@material-ui/core';
import { submitProposalMethod } from '../web3/contractInteraction';
import { useState } from 'react';



const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none' 
};


const buttonStyle = {
  mt: 2, 
  mr: 1,
};




function SubmitProposalModal({ open, onClose,jobId }) {


  const [proposalText, setProposalText] = useState('');


  const handleSubmit = async () => {
    if (!proposalText) {
      alert('Please enter a proposal.');
      return;
    }
    if (!jobId) {
      console.error('Job ID is missing');
      return;
    }
   
    try {
      await submitProposalMethod(jobId, proposalText);
      console.log('Proposal submitted successfully');
      onClose();
    } catch (error) {
      console.error('Error submitting proposal:', error);
    }
  };


  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="submit-proposal-modal-title"
      aria-describedby="submit-proposal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="submit-proposal-modal-title" variant="h6" component="h2">
          Submit Proposal
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="proposal"
          label="Your Proposal"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={proposalText}
          onChange={(event) => setProposalText(event.target.value)}
          sx={{ mt: 2 }} 
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Button onClick={onClose} sx={buttonStyle}>
    Cancel
  </Button>
  <Button  onClick={handleSubmit} sx={buttonStyle}>
    Submit
  </Button>
</Box>
      </Box>
    </Modal>
  );
}
export default SubmitProposalModal;

