import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ComingSoon from './pages/ComingSoon';
import GetStartedPage from './pages/GetStartedPage';
import OnboardingForm from './pages/OnboardingForm';
import { AnimatePresence, motion } from 'framer-motion';

// Temporarily disabled for sharing
// const isProduction = process.env.NODE_ENV === 'production';

function App() {
  // Temporarily disabled for sharing
  // if (isProduction) {
  //   return <ComingSoon />;
  // }
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}><Layout /></motion.div>}>
            <Route index element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}><HomePage /></motion.div>} />
            <Route path="get-started" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}><GetStartedPage /></motion.div>} />
            <Route path="get-started/onboarding" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}><OnboardingForm /></motion.div>} />
            <Route path="*" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}><div className="container py-20 text-center"><h1 className="text-3xl font-bold">Page Not Found</h1></div></motion.div>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
