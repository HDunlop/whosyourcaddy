// src/auth/pages/Register.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.ts';
import { AuthInput } from '../components/AuthInput.tsx';
import { AuthButton } from '../components/AuthButton.tsx';
import { AuthError } from '../components/AuthError.tsx';
import '../styles/AuthPage.css';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async () => {
    const success = await register({
      email,
      confirmEmail,
      password,
      confirmPassword,
    });
    
    if (success) {
      // Redirect to dashboard or home page
      navigate('/dashboard');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRegister();
    }
  };

  const isFormValid = email && confirmEmail && password && confirmPassword;

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-logo">Who's Your Caddy</h1>
          <p className="auth-tagline">The caddy allocation software service</p>
        </div>

        <div className="auth-card">
          <div className="auth-tabs">
            <button 
              className="auth-tab"
              onClick={() => navigate('/auth/login')}
            >
              Log in
            </button>
            <button className="auth-tab auth-tab--active">New User</button>
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
              type="email"
              placeholder="confirm email"
              value={confirmEmail}
              onChange={setConfirmEmail}
              disabled={loading}
              autoComplete="email"
            />
            
            <AuthInput
              type="password"
              placeholder="password"
              value={password}
              onChange={setPassword}
              disabled={loading}
              autoComplete="new-password"
            />
            
            <AuthInput
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              disabled={loading}
              autoComplete="new-password"
            />

            {error && <AuthError message={error} />}

            <AuthButton
              onClick={handleRegister}
              disabled={!isFormValid}
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