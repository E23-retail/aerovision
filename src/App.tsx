import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Dashboard from './pages/Dashboard';
import Segments from './pages/Segments';
import Campaigns from './pages/Campaigns';
import AppLayout from './components/layouts/AppLayout/AppLayout';

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/analytics" element={<Dashboard />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/campaigns" element={<Campaigns />} />
          {/* Add other routes as they are implemented */}
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
