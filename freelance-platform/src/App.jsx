// App.js

import React from 'react';
import JobCard from './components/JobCard.jsx';

function App() {
  // Example job data to pass to the JobCard component
  const exampleJob = {
    id: 1,
    title: 'Full Stack Developer',
    description: 'Looking for a full stack developer to work on exciting projects.',
    isOpen: true // Assuming this is part of your job data structure
  };

  // Event handlers for the JobCard actions
  const handleViewJob = (jobId) => {
    console.log('Viewing job', jobId);
  };

  const handleApply = (jobId) => {
    console.log('Applying to job', jobId);
  };

  return (
    <div>
      <h1>Welcome to the Freelance Platform</h1>
      <JobCard 
        job={exampleJob} 
        onViewJob={() => handleViewJob(exampleJob.id)} 
        onApply={() => handleApply(exampleJob.id)} 
      />
    </div>
  );
}

export default App;
