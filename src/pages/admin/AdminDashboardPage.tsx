import React from 'react';
import { AdminDashboard } from '../../components/admin/Dashboard';
import { UserList } from '../../components/admin/UserList';

const mockStats = {
  totalUsers: 1234,
  activeUsers: 789,
  newUsersToday: 42,
  totalMatches: 567,
};

const mockUsers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 24,
    university: 'Stanford University',
    photos: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330'],
    createdAt: new Date('2024-02-15'),
    bio: 'Psychology student',
    course: 'Psychology',
    interests: ['Reading', 'Travel'],
    location: 'San Francisco, CA',
  },
  // Add more mock users as needed
];

export const AdminDashboardPage: React.FC = () => {
  const handleBanUser = (userId: string) => {
    console.log('Ban user:', userId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="text-xl font-bold text-pink-600">We Met Admin</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <AdminDashboard stats={mockStats} />
          <UserList users={mockUsers} onBanUser={handleBanUser} />
        </div>
      </main>
    </div>
  );
};