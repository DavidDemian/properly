import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div className="container py-20 text-center"><h1 className="text-3xl font-bold">Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
