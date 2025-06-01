import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Capitalized App
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found. Please check index.html for a div with id="root".');
}
