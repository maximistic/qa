import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthForm } from '@/components/auth/AuthForm';

export default function SignupPage() {
  return (
    <AuthLayout
      title="Sign Up"
      subtitle="Create a new account to get started"
    >
      <AuthForm type="signup" />
    </AuthLayout>
  );
}