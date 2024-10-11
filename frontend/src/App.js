import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Signup onAuthSuccess={handleAuthSuccess} />} />
                    <Route path="/login" element={<Login onAuthSuccess={handleAuthSuccess} />} />
                    <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

