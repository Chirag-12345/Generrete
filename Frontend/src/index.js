import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider
  clientId='659825890788-o22jck1ugffn32521v19ja3gd3c7i0a9.apps.googleusercontent.com'
  >
    <App />
  </GoogleOAuthProvider>
</React.StrictMode>
);