// src/auth/types/auth.types.ts

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  // userType: 'caddy' | 'club';
  email: string;
  confirmEmail: string;
  // verifiedEmail: boolean;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

export interface AuthErrorType {
  message: string;
  field?: string;
}

export type AuthMode = 'login' | 'register';

export type SplitButtonOption = 'caddy' | 'club';