// src/auth/types/auth.types.ts

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  confirmEmail: string;
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