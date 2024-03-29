import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  modal: {
    padding: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    margin: theme.spacing(2, 0),
  },
  contentText: {
    color: '#000',
  },
  closeButton: {
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
}));


function JobDetailsModal({ job, open, onClose }) {
  const classes = useStyles();
  console.log('Payment:', job.payment);


  if (!job) {
    return null;
  }
  const paymentString = job.payment || '0';




  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="job-details-title">
      <DialogTitle id="job-details-title" className={classes.title}>
        {job.title}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText className={`${classes.content} ${classes.contentText}`}>
          Description: {job.description}
        </DialogContentText>
        <DialogContentText className={classes.contentText}>
          Payment: {paymentString} ETH
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.closeButton}>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}


export default JobDetailsModal;



