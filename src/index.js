import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUHT0_DOMAIN;
const clientId = process.env.REACT_APP_AUHT0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);