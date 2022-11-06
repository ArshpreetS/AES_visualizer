import React from 'react';
import { AnimatePresence } from 'framer-motion';
import MainPage from './mainPage';
import KeyExpansion from './Keyexpansion';
import RoundFunction from './Roundfunction';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<MainPage />} />
        <Route path="/KeyExpansion" element={<KeyExpansion />} />
        <Route path="/RoundFunction" element={<RoundFunction />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App;

