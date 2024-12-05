import React from 'react';
import { Users, Heart, UserCheck, Calendar } from 'lucide-react';
import type { UserStats } from '../../types/admin';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => (
  <div className="rounded-lg bg-white p-6 shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="rounded-full bg-pink-100 p-3 text-pink-600">
        {icon}
      </div>
    </div>
  </div>
);

export const AdminDashboard: React.FC<{ stats: UserStats }> = ({ stats }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          icon={<UserCheck className="h-6 w-6" />}
        />
        <StatCard
          title="New Users Today"
          value={stats.newUsersToday}
          icon={<Calendar className="h-6 w-6" />}
        />
        <StatCard
          title="Total Matches"
          value={stats.totalMatches}
          icon={<Heart className="h-6 w-6" />}
        />
      </div>
    </div>
  );
};