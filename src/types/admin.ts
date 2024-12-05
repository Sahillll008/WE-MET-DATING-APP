export interface AdminUser {
  id: string;
  email: string;
  role: 'admin';
}

export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  newUsersToday: number;
  totalMatches: number;
}