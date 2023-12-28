// components/JobCard.js

import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';

function JobCard({ job, onViewJob, onApply }) {
  return (
    <Card variant="outlined" style={{ marginBottom: 16 }}>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography color="textSecondary">{job.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onViewJob(job.id)}>
          View Job
        </Button>
        <Button size="small" color="primary" onClick={() => onApply(job.id)}>
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobCard;
