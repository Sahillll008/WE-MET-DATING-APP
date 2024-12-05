import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../lib/validations';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import type { RegisterData } from '../../types/auth';

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    // TODO: Implement actual registration logic
    console.log('Register data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Full Name"
        {...register('name')}
        error={errors.name?.message}
      />
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
      <Input
        label="Birthday"
        type="date"
        {...register('birthday')}
        error={errors.birthday?.message}
      />
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          {...register('gender')}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="other">Other</option>
        </select>
        {errors.gender?.message && (
          <p className="text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <Input
        label="University"
        {...register('university')}
        error={errors.university?.message}
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Creating account...' : 'Create account'}
      </Button>
    </form>
  );
};