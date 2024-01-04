// App.jsx

import React from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import JobsPage from './pages/JobsPage';
// ... Import other necessary components or pages

function App() {
  return (
    <div>
      <JobsPage />
      {/* You can also set up routing here if you have multiple pages */}
    </div>
  );
}

export default App;
