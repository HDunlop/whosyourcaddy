// src/auth/index.ts

// Pages
export { Login } from './pages/Login.tsx';
export { Register } from './pages/Register.tsx';

// Components
export { AuthInput } from './components/AuthInput.tsx';
export { AuthButton } from './components/AuthButton.tsx';
export { AuthError } from './components/AuthError.tsx';

// Hooks
export { useAuth } from './hooks/useAuth.ts';

// Services
export { AuthService } from './services/authService.ts';

// Types
export type {
  LoginCredentials,
  RegisterCredentials,
  AuthResponse,
  AuthErrorType,
  AuthMode,
} from './types/auth.types.ts';