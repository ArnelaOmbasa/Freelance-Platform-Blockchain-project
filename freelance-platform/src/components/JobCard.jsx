import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';

function JobCard({ job, onViewJob, onApply, onViewProposal, onCancelJob, userStatus }) {
  return (
    <Card variant="outlined" style={{ flexBasis: 'calc(33.333% - 32px)', margin: '16px', maxWidth: '100%' }}>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography color="textSecondary">{job.description}</Typography>
      </CardContent>
      <CardActions>
        {userStatus === 'admin' ? (
          <>
            <Button size="small" color="primary" onClick={() => onViewProposal(job.id)}>
              View Proposal
            </Button>
            <Button size="small" color="primary" onClick={() => onCancelJob(job.id)}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button size="small" color="primary" onClick={() => onViewJob(job.id)}>
              View Job
            </Button>
            <Button size="small" color="primary" onClick={() => onApply(job.id)}>
              Apply Now
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default JobCard;