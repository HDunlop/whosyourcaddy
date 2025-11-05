// src/auth/pages/Login.tsx

import React from 'react';
import { AuthButton } from '../components/AuthButton.tsx';
import '../styles/AuthPage.css';
import { useAuth0 } from '@auth0/auth0-react';


const Login: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleButtonClick = () : (() => void) => {
    if (isAuthenticated) {
      return logout;
    } else {
      return loginWithRedirect;
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-logo">Who's Your Caddy</h1>
          <p className="auth-tagline">The caddy allocation software service</p>
        </div>
        <AuthButton onClick={handleButtonClick}>
          {isAuthenticated ? "Sign out" : "Fuck yeah"}
        </AuthButton>
      </div>
    </div>
  );
};

export { Login };