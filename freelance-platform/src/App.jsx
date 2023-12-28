// App.jsx

import React from 'react';
import JobList from './components/JobList.jsx';

function App() {
  // Example array of job data to pass to the JobList component
  const jobs = [
    { id: 1, title: 'Web Developer', description: 'Looking for an experienced web developer with knowledge in React and Node.js.' },
    { id: 2, title: 'Graphic Designer', description: 'Seeking a creative graphic designer familiar with Adobe Creative Suite.' },
    { id: 3, title: 'Data Analyst', description: 'Data analyst needed for market analysis project. Proficiency in Python and SQL required.' },
    { id: 4, title: 'Mobile App Developer', description: 'Developing a cross-platform mobile application using Flutter or React Native.' },
    { id: 5, title: 'Content Writer', description: 'Content writer needed for creating engaging blog posts and articles on tech topics.' },
    { id: 6, title: 'Digital Marketing Specialist', description: 'Looking for a digital marketing expert with SEO and social media advertising experience.' },
    { id: 7, title: 'UI/UX Designer', description: 'UI/UX designer to redesign a SaaS platform. Proficiency in Sketch or Figma is a plus.' },
    { id: 8, title: 'Project Manager', description: 'Project manager needed for overseeing software development projects. Agile methodology experience required.' },
    { id: 9, title: 'Video Editor', description: 'Seeking a video editor with experience in Adobe Premiere Pro and After Effects.' },
    { id: 10, title: 'Cybersecurity Analyst', description: 'Cybersecurity analyst required for a security audit of our network infrastructure.' }
  ];

  // Placeholder functions for handling job list actions
  const handleViewJob = (jobId) => {
    console.log('View job details:', jobId);
    // Logic to view job details
  };

  const handleApply = (jobId) => {
    console.log('Apply to job:', jobId);
    // Logic to apply to job
  };

  return (
    <div>
      <h1>Job Listings</h1>
      <JobList jobs={jobs} onViewJob={handleViewJob} onApply={handleApply} />
    </div>
  );
}

export default App;
