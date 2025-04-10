// src/app/login/page.tsx
import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthForm } from '@/components/auth/AuthForm';

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign In"
      subtitle="Enter your credentials to access your account"
    >
      <AuthForm type="login" />
    </AuthLayout>
  );
}
