// src/auth/components/AuthError.tsx

import React from 'react';
import '../styles/AuthError.css';

interface AuthErrorProps {
  message: string;
}

export const AuthError: React.FC<AuthErrorProps> = ({ message }) => {
  return (
    <div className="auth-error">
      {message}
    </div>
  );
};