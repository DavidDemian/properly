import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ComingSoon from './pages/ComingSoon';

const isProduction = process.env.NODE_ENV === 'production';

function App() {
  if (isProduction) {
    return <ComingSoon />;
  }
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
