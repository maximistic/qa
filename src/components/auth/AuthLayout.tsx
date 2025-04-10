import React from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 items-center justify-center bg-radial-fade text-white p-10">

        <div>
        <div className="flex items-center gap-4">
          <Image src="/Logo.png" alt="Quantum Apps Logo" className="object-contain" width={50} height={50}/>
          <h1 className="text-4xl font-bold mb-0 font-inika">QUANTUM APPS</h1>
        </div>

          <h1 className="text-4xl font-bold mb-4">AI That Thinks.<br />Data That Works.</h1>
          <p className="mb-6 text-lg max-w-md">
            Building smarter systems for a connected world. Transform your data infrastructure with AI-powered insights and seamless integration.
          </p>
          <div className="flex gap-4 flex-wrap">
            {['AI Powered', 'Scalable', 'Secure', 'Lightning Fast'].map((label) => (
              <span
                key={label}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <p className="mb-4 text-sm text-gray-500">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};
