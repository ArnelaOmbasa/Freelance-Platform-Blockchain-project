// components/JobList.js

import React from 'react';
import JobCard from './JobCard';

function JobList({ jobs, onViewJob, onApply }) {
  return (
    <div>
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
