// src/auth/hooks/useAuth.ts

// import { useState } from 'react';
// import { AuthService } from '../services/authService.ts';
// import { LoginCredentials, RegisterCredentials } from '../types/auth.types.ts';

// interface UseAuthReturn {
//   loading: boolean;
//   error: string | null;
//   login: (credentials: LoginCredentials) => Promise<boolean>;
//   register: (credentials: RegisterCredentials) => Promise<boolean>;
//   logout: () => void;
//   validateRegistration: (credentials: RegisterCredentials) => AuthErrorType | null;
// }

// const useAuth = (): UseAuthReturn => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const validateRegistration = (credentials: RegisterCredentials): AuthErrorType | null => {
//     // Check email match
//     if (credentials.email !== credentials.confirmEmail) {
//       return {
//         message: 'Email addresses do not match.',
//         field: 'confirmEmail',
//       };
//     }

//     // Check password match
//     if (credentials.password !== credentials.confirmPassword) {
//       return {
//         message: 'Passwords do not match.',
//         field: 'confirmPassword',
//       };
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(credentials.email)) {
//       return {
//         message: 'Please enter a valid email address.',
//         field: 'email',
//       };
//     }

//     // Validate password strength
//     if (credentials.password.length < 8) {
//       return {
//         message: 'Password must be at least 8 characters long.',
//         field: 'password',
//       };
//     }

//     return null;
//   };

//   const login = async (credentials: LoginCredentials): Promise<boolean> => {
//     setLoading(true);
//     setError(null);

//     const response = await AuthService.login(credentials);

//     setLoading(false);

//     if (response.success) {
//       return true;
//     } else {
//       setError(response.message || 'Login failed. Please check your credentials and try again.');
//       return false;
//     }
//   };

//   const register = async (credentials: RegisterCredentials): Promise<boolean> => {
//     setLoading(true);
//     setError(null);

//     // Validate before making API call
//     const validationError = validateRegistration(credentials);
//     if (validationError) {
//       setError(validationError.message);
//       setLoading(false);
//       return false;
//     }

//     const response = await AuthService.register(credentials);

//     setLoading(false);

//     if (response.success) {
//       return true;
//     } else {
//       setError(response.message || 'Registration failed. Please try again.');
//       return false;
//     }
//   };

//   const logout = (): void => {
//     AuthService.logout();
//   };

//   return {
//     loading,
//     error,
//     login,
//     register,
//     logout,
//     validateRegistration,
//   };
// };

// export { useAuth };