import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './converted/Dashboard';
import Quiz from './converted/Quiz';
import CompanyQuestions from './converted/CompanyQuestions';
import Signup from './converted/Signup';
import Contact from './converted/Contact';
import PersonalizedRoadmap from './converted/PersonalizedRoadmap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/company-questions" element={<CompanyQuestions />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roadmap" element={<PersonalizedRoadmap />} />
        {/* Add routes for your other static pages here using the Roadmap template */}
      </Routes>
    </Router>
  );
}

export default App;