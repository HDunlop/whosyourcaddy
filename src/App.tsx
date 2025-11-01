import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './auth/pages/Login.tsx';
import { Register } from './auth/pages/Register.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        
        {/* Add other routes here as you build them */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/caddies" element={<CaddiesList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
