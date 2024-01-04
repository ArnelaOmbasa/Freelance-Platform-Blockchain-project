// components/JobList.js

import React from 'react';
import JobCard from '../components/JobCard';

function JobList({ jobs, onViewJob, onApply }) {
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
        <JobCard
          key={job.id}
          job={job}
          onViewJob={onViewJob}
          onApply={onApply}
        />
      ))}
    </div>
  );
}

export default JobList;
