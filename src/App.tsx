import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ThemeProvider } from './providers/ThemeProvider';
import AppLayout from './layouts/AppLayout/AppLayout';
import Analytics from './pages/analytics';
import Segments from './pages/segments';
import Campaigns from './pages/campaigns';
import Settings from './pages/settings';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/segments" element={<Segments />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
