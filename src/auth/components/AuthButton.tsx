// src/auth/components/AuthButton.tsx

import React from 'react';
import '../styles/AuthButton.css';

interface AuthButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`auth-button auth-button--${variant}`}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export { AuthButton };