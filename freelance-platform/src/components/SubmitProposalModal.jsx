import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@material-ui/core';

// Custom styles for the modal
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2, // Rounded corners
  outline: 'none' // Remove default focus outline
};

// Custom styles for the buttons
const buttonStyle = {
  mt: 2, // Margin top
  mr: 1, // Margin right
};

// Your Modal component code
function SubmitProposalModal({ open, onClose }) {

  // Handle the submit action
  const handleSubmit = () => {
    // Implement submission logic here
    console.log('Submitting proposal');
    onClose(); // Close the modal after submit
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
          sx={{ mt: 2 }} // Margin top
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