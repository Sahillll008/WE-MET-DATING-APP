import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { loginSchema } from '../../lib/validations';
import { useAdminAuth } from '../../lib/hooks/useAdminAuth';
import { useAdminStore } from '../../store/useAdminStore';
import type { LoginCredentials } from '../../types/auth';

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { handleAdminLogin } = useAdminAuth();
  const loginAdmin = useAdminStore((state) => state.login);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    const admin = await handleAdminLogin(data);
    if (admin) {
      loginAdmin(admin);
      navigate('/admin');
    } else {
      setError('email', {
        type: 'manual',
        message: 'Invalid admin credentials',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
            <Shield className="h-6 w-6 text-pink-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Admin Login
          </h2>
        </div>

        <div className="bg-white px-8 py-10 shadow-md sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Email"
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};