import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Routers} from 'react-router-dom';
import { AuthProvider } from './usecontext/Authcontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routers>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Routers>
);


