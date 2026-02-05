import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import your pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

// Create a wrapper component to handle animations
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // 'mode="wait"' ensures the old page fades out BEFORE the new one fades in
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
       <AnimatedRoutes />
    </Router>
  );
}

export default App;