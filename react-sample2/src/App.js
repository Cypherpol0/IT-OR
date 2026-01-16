import React from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import Footer from './components/Footer';

const App = () => {
  const jobs = [
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ];

  return (
    <div className="app">
      <Header />
      <JobList jobs={jobs} />
      <Footer />
    </div>
  );
};

export default App;
