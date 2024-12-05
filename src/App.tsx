import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import { AuthPage } from './pages/Auth';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { ProfileCard } from './components/ProfileCard';

const mockUser = {
  id: '1',
  name: 'Sarah',
  age: 20,
  bio: 'Psychology student who loves coffee and good conversations. Always up for trying new restaurants and exploring the city.',
  photos: [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
  ],
  university: 'Stanford University',
  course: 'Psychology',
  interests: ['Coffee', 'Photography', 'Travel', 'Art', 'Music'],
  location: 'San Francisco, CA',
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" />;
};

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAdmin = useAuthStore((state) => state.user?.role === 'admin');
  return isAdmin ? <>{children}</> : <Navigate to="/admin/login" />;
};

function App() {
  const handleLike = () => {
    console.log('Liked profile');
  };

  const handlePass = () => {
    console.log('Passed profile');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminDashboardPage />
            </AdminRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div className="min-h-screen bg-gray-100 p-4">
                <div className="mx-auto max-w-md">
                  <h1 className="mb-8 text-center text-3xl font-bold text-pink-600">
                    We Met
                  </h1>
                  <ProfileCard
                    user={mockUser}
                    onLike={handleLike}
                    onPass={handlePass}
                  />
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;