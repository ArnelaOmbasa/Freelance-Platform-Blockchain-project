// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import your App component
import { AuthProvider } from './AuthContext'; // Corrected import statement

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* Use AuthProvider to wrap <App /> */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
