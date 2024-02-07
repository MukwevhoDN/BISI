import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Routes instead of Switch
import Message from './Log';
import Welcome from './welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;