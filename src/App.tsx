import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Analytics from './pages/analytics';
import Segments from './pages/segments';
import Campaigns from './pages/campaigns';
import AppLayout from './layouts/AppLayout/AppLayout';
import Settings from './pages/settings';

export const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
