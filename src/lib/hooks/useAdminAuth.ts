import { useCallback } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import type { LoginCredentials } from '../../types/auth';
import type { AdminUser } from '../../types/admin';

export const useAdminAuth = () => {
  const handleAdminLogin = useCallback(async (credentials: LoginCredentials) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      
      const adminDoc = await getDoc(doc(db, 'admins', user.uid));
      if (!adminDoc.exists()) {
        throw new Error('Not authorized as admin');
      }

      const adminData = adminDoc.data() as Omit<AdminUser, 'id'>;
      return {
        id: user.uid,
        ...adminData,
      };
    } catch (error) {
      console.error('Admin login error:', error);
      return null;
    }
  }, []);

  return { handleAdminLogin };
};