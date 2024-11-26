import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


const redirectUri = window.location.hostname === 'localhost'
  ? 'http://localhost:3000/project-7/'  
  : 'https://ganesh-s7.github.io/project-7/';  

const returnToUrl = window.location.hostname === 'localhost'
  ? 'http://localhost:3000/project-7/'  
  : 'https://ganesh-s7.github.io/project-7/';  

root.render(
  <Auth0Provider
    domain="dev-6zg6jdsacy4xey1s.us.auth0.com"
    clientId="Rzf9y57WdahDUq3vOnqhHC9Yb99L9vgb"
    authorizationParams={{
      redirect_uri: redirectUri,  
      returnTo: returnToUrl,  
    }}    
  >
    <App />
  </Auth0Provider>
);

