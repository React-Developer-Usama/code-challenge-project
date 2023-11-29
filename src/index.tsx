import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/common.css';
import './style/custom.css';
import App from './App';
import { ApiProvider } from './context/ApiContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
