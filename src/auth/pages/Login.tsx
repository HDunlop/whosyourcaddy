// src/auth/pages/LoginPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.ts';
import { AuthInput } from '../components/AuthInput.tsx';
import { AuthButton } from '../components/AuthButton.tsx';
import { AuthError } from '../components/AuthError.tsx';
import '../styles/AuthPage.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login({ email, password });
    if (success) {
      // Redirect to dashboard or home page
      navigate('/dashboard');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-logo">Who's Your Caddy</h1>
          <p className="auth-tagline">The caddy allocation software service</p>
        </div>

        <div className="auth-card">
          <div className="auth-tabs">
            <button className="auth-tab auth-tab--active">Log in</button>
            <button 
              className="auth-tab"
              onClick={() => navigate('/auth/register')}
            >
              New User
            </button>
          </div>

          <div className="auth-form" onKeyPress={handleKeyPress}>
            <AuthInput
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={setEmail}
              disabled={loading}
              autoComplete="email"
            />
            
            <AuthInput
              type="password"
              placeholder="password"
              value={password}
              onChange={setPassword}
              disabled={loading}
              autoComplete="current-password"
            />

            {error && <AuthError message={error} />}

            <AuthButton
              onClick={handleLogin}
              disabled={!email || !password}
              loading={loading}
            >
              Enter
            </AuthButton>
          </div>
        </div>
      </div>
    </div>
  );
};