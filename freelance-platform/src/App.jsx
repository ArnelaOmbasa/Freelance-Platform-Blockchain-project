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
import SubmitProposalModal from './components/SubmitProposalModal';


const App = () => {

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <>
      
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Submit Proposal Modal
      </Button>
      <SubmitProposalModal open={modalOpen} onClose={handleClose} />
      {/*<Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>*/}

  </>
  );
};

export default App;
