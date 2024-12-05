import { useCallback } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import type { LoginCredentials, RegisterData } from '../../types/auth';

export const useAuth = () => {
  const { login, logout } = useAuthStore();

  const handleLogin = useCallback(async (credentials: LoginCredentials) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      // TODO: Fetch additional user data from Firestore
      login({
        id: user.uid,
        name: user.displayName || '',
        age: 0,
        bio: '',
        photos: [user.photoURL || ''],
        university: '',
        course: '',
        interests: [],
        location: '',
      });
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }, [login]);

  const handleRegister = useCallback(async (data: RegisterData) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      // TODO: Store additional user data in Firestore
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await auth.signOut();
      logout();
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  }, [logout]);

  return {
    handleLogin,
    handleRegister,
    handleLogout,
  };
};