// src/auth/components/AuthButton.tsx

import React from 'react';
import '../styles/AuthButton.css';
import { useAuth0 } from '@auth0/auth0-react';

interface AuthButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      className={`auth-button auth-button--${variant}`}
    >
      {children}
    </button>
  );
};

export { AuthButton };