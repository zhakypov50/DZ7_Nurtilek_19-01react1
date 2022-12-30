import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Timer from "./timer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Timer/>
  </React.StrictMode>
);