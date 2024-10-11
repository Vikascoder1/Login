import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client'
import App from './App';
import './index.css'; // Assuming you have a CSS file

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);