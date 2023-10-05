import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

