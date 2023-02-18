import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext'
import { ActivityContextProvider } from './context/activityContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ActivityContextProvider>
  <AuthContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
  </ActivityContextProvider>

);

