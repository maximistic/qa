'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password must be at least 4 characters."),
});

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email(),
  password: z.string().min(4, "Password must be at least 4 characters."),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ['confirmPassword'],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

interface AuthFormProps {
  type: 'login' | 'signup';
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const isSignup = type === 'signup';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData | LoginFormData>({
    resolver: zodResolver(isSignup ? signupSchema : loginSchema),
  });

  const onSubmit = (data: SignupFormData | LoginFormData) => {
    alert(`${type === 'login' ? 'Logged in' : 'Signed up'} successfully!`);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
      {isSignup && (
        <div>
          <label className="text-sm font-medium block mb-1">Name</label>
          <input
            type="text"
            {...register('name')}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
          />
          {'name' in errors && (
            <p className="text-sm text-red-500 mt-1">{errors.name?.message}</p>
          )}
        </div>
      )}

      <div>
        <label className="text-sm font-medium block mb-1">Email</label>
        <input
          type="email"
          {...register('email')}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium block mb-1">Password</label>
        <input
          type="password"
          {...register('password')}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
        />
        {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
      </div>

      {isSignup && (
        <div>
          <label className="text-sm font-medium block mb-1">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
          />
          {'confirmPassword' in errors && (
            <p className="text-sm text-red-500 mt-1">{errors.confirmPassword?.message}</p>
          )}
        </div>
      )}

      {type === 'login' && (
        <div className="text-sm text-right">
          <Link href="/forgot-password" className="text-indigo-600 hover:underline">Forgot Your Password?</Link>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
      >
        {type === 'login' ? 'Sign In' : 'Sign Up'}
      </button>

      <p className="text-center text-sm text-gray-500">
        {type === 'login' ? (
          <>Dont have an account? <Link href="/signup" className="text-black font-semibold">Create New one here</Link></>
        ) : (
          <>Already have an account? <Link href="/login" className="text-black font-semibold">Sign In</Link></>
        )}
      </p>
    </form>
  );
};