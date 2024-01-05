// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import JobPage from './pages/JobsPage';
import LoginPage from './pages/LoginPage';
import AddJobModal from './components/AddJobModal';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import ViewJobDetailsModal from './components/JobDetailsModal';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    title: "Frontend Developer",
    description: "We are looking for a React developer...",
    payment: 5000,
    isOpen: true,
    freelancer: "0x123..."
    // Add other fields as per your Job struct
  });
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      
      <Button onClick={handleOpenModal}>View Job Details</Button>
      <ViewJobDetailsModal job={jobDetails} open={isModalOpen} onClose={handleCloseModal} />
      {/*<Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>*/}

  </>
  );
};

export default App;
