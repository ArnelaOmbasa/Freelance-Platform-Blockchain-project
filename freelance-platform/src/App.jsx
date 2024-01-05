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
import ViewProposalModal from './components/ViewProposalModal'; // Import your ViewProposalModal component



const App = () => {

  const [modalOpen, setModalOpen] = useState(false);  
  // Hardcoded proposal text
  const proposalText = "Here's a detailed proposal highlighting my experience, skills, and the value I can add to your project.";

 
  return (
    <>
      <>
      <button onClick={() => setModalOpen(true)}>View Proposal</button>
      <ViewProposalModal open={modalOpen} handleClose={() => setModalOpen(false)} />
    </>
      {/*<Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>*/}

  </>
  );
};

export default App;
