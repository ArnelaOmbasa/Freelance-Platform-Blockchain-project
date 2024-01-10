// components/JobList.js

import React from 'react';
import JobCard from '../components/JobCard';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

  gridItem: {
    display: 'flex', 
  },

}));

function JobList({ jobs, onViewJob, onApply }) {
  const classes = useStyles();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around', // Changed to space-around for full width distribution
      alignContent: 'flex-start',
      padding: '16px 0', // Removed horizontal padding
      width: '100%', // Ensure full width
      boxSizing: 'border-box', // Ensure padding doesn't affect the overall width
    }}>
      {jobs.map((job) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={job.id} className={classes.gridItem}>

        <JobCard
          key={job.id}
          job={job}
          onViewJob={onViewJob}
          onApply={onApply}
        />
         </Grid>
      ))}
    </div>
  );
}

export default JobList;
