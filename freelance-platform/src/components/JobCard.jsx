import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import ViewProposalModal from './ViewProposalModal'; // Import your modal components
import ViewJobDetailsModal from './JobDetailsModal';
import SubmitProposalModal from './SubmitProposalModal';
import { makeStyles } from '@material-ui/core/styles';
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

  const handleOpenViewProposal = () => setViewProposalOpen(true);
  const handleCloseViewProposal = () => setViewProposalOpen(false);

  const handleOpenViewJobDetails = () => setViewJobDetailsOpen(true);
  const handleCloseViewJobDetails = () => setViewJobDetailsOpen(false);

  const handleOpenSubmitProposal = () => setSubmitProposalOpen(true);
  const handleCloseSubmitProposal = () => setSubmitProposalOpen(false);



  return (
    <>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h5">{job.title}</Typography>
          <Typography color="textSecondary">{job.description}</Typography>
        </CardContent>
        <CardActions>
          {userStatus === 'admin' ? (
            <>
              <Button size="small" color="primary" onClick={handleOpenViewProposal}>
                View Proposal
              </Button>
              <Button size="small" color="primary" onClick={handleCloseViewProposal}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button size="small" color="primary" onClick={handleOpenViewJobDetails}>
                View Job
              </Button>
              <Button size="small" color="primary" onClick={handleOpenSubmitProposal}>
                Apply Now
              </Button>
            </>
          )}
        </CardActions>
      </Card>
      <ViewProposalModal open={isViewProposalOpen} handleClose={handleCloseViewProposal} />
      <ViewJobDetailsModal job={job} open={isViewJobDetailsOpen} onClose={handleCloseViewJobDetails} />
      <SubmitProposalModal open={isSubmitProposalOpen} onClose={handleCloseSubmitProposal} />
    </>
  );
}

export default JobCard; 

