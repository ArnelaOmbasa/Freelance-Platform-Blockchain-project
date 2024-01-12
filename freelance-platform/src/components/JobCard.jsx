import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import ViewProposalModal from './ViewProposalModal';
import ViewJobDetailsModal from './JobDetailsModal';
import SubmitProposalModal from './SubmitProposalModal';
import { makeStyles } from '@material-ui/core/styles';
import { cancelJobMethod, completeJobMethod } from '../web3/contractInteraction';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

function JobCard({ job, userStatus }) {
  const classes = useStyles();
  const [isViewProposalOpen, setViewProposalOpen] = useState(false);
  const [isViewJobDetailsOpen, setViewJobDetailsOpen] = useState(false);
  const [isSubmitProposalOpen, setSubmitProposalOpen] = useState(false);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  const handleOpenViewProposal = () => setViewProposalOpen(true);
  const handleCloseViewProposal = () => setViewProposalOpen(false);
  const handleOpenViewJobDetails = () => setViewJobDetailsOpen(true);
  const handleCloseViewJobDetails = () => setViewJobDetailsOpen(false);
  const handleOpenSubmitProposal = () => setSubmitProposalOpen(true);
  const handleCloseSubmitProposal = () => {
    setSubmitProposalOpen(false);
    setProposalSubmitted(true);
  };

  const handleCompleteJob = async () => {
    if (!job.id) {
      console.error('Job ID is missing');
      return;
    }

    try {
      await completeJobMethod(job.id);
      console.log('Job completed successfully');
    } catch (error) {
      console.error('Error completing job:', error);
    }
  };
  const handleCancelJob = async () => {


    if (!job.id) {
      console.error('Job ID is missing');
      return;
    }
 
    try {
      await cancelJobMethod(job.id);
      console.log('Job cancelled successfully');
    } catch (error) {
      console.error('Error cancelling job:', error);
    }
  };
 
  return (
    <>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5">{job.title || 'No Title'}</Typography>
          <Typography color="textSecondary">{job.description || 'No Description'}</Typography>
        </CardContent>
        <CardActions>
          {userStatus === 'admin' ? (
            <>
              <Button size="small" color="primary" onClick={handleOpenViewProposal}>
                View Proposal
              </Button>
              <Button size="small" color="primary" onClick={handleCancelJob}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button size="small" color="primary" onClick={handleOpenViewJobDetails}>
                View Job
              </Button>
              {proposalSubmitted ? (
                <Button size="small" color="secondary" onClick={handleCompleteJob}>
                  Complete
                </Button>
              ) : (
                <Button size="small" color="primary" onClick={handleOpenSubmitProposal}>
                  Apply Now
                </Button>
              )}
            </>
          )}
        </CardActions>
      </Card>
      <ViewProposalModal open={isViewProposalOpen} handleClose={handleCloseViewProposal} jobId={job.id} />
      <ViewJobDetailsModal job={job} open={isViewJobDetailsOpen} onClose={handleCloseViewJobDetails} jobId={job.id} />
      <SubmitProposalModal open={isSubmitProposalOpen} onClose={handleCloseSubmitProposal} jobId={job.id}/>
    </>
  );
}

export default JobCard;
