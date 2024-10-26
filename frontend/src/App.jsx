// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AddEntityForm from './components/AddEntityForm';
import AddBatchForm from './components/AddBatchForm';
import IssueCertificateForm from './components/IssueCertificateForm';
import VerifyBatch from './components/VerifyBatch';

const App = () => {
    return (
        <Router>
            <CssBaseline />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-entity" element={<AddEntityForm />} />
                <Route path="/add-batch" element={<AddBatchForm />} />
                <Route path="/issue-certificate" element={<IssueCertificateForm />} />
                <Route path="/verify-batch" element={<VerifyBatch />} />
            </Routes>
        </Router>
    );
};

export default App;
