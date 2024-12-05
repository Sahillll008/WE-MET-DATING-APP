import React, { useState } from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/RegisterForm';
import { Button } from '../components/ui/Button';

export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-600">We Met</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </Button>
          </p>
        </div>

        <div className="bg-white px-8 py-10 shadow-md sm:rounded-lg">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};