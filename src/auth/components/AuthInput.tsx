// src/auth/components/AuthInput.tsx

import React from 'react';
import '../styles/AuthInput.css';

interface AuthInputProps {
  type: 'email' | 'password' | 'text';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  autoComplete?: string;
  error?: boolean;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
  autoComplete,
  error = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      autoComplete={autoComplete}
      className={`auth-input ${error ? 'auth-input--error' : ''}`}
    />
  );
};