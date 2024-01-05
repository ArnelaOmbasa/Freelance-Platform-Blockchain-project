import React from 'react';
import { makeStyles, Modal, Box, Typography, Button } from '@material-ui/core';

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
    marginBottom: theme.spacing(2), // Spacing between the text and the button
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const ViewProposalModal = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="view-proposal-modal-title"
      aria-describedby="view-proposal-modal-description"
    >
      <Box className={classes.modalBox}>
        <Typography id="view-proposal-modal-title" variant="h6" gutterBottom>
          Proposal
        </Typography>
        <Typography id="view-proposal-modal-description" gutterBottom className={classes.proposalText}>
          Here's a detailed proposal highlighting my experience, skills, and the value I can add to your project.
        </Typography>
        <div className={classes.buttonContainer}>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ViewProposalModal;
