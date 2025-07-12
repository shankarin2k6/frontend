import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import JobPreview from './pages/JobPreview';
import Applicants from './pages/Applicants';
import Match from './pages/Match';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/job-preview" replace />} />
          <Route path="/job-preview" element={<JobPreview />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/match" element={<Match />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;