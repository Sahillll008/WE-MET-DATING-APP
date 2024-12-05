import { create } from 'zustand';
import type { AdminUser } from '../types/admin';

interface AdminState {
  admin: AdminUser | null;
  isAuthenticated: boolean;
  login: (admin: AdminUser) => void;
  logout: () => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  admin: null,
  isAuthenticated: false,
  login: (admin) => set({ admin, isAuthenticated: true }),
  logout: () => set({ admin: null, isAuthenticated: false }),
}));