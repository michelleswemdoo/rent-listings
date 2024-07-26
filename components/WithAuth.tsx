'use client';

import * as React from 'react';
import { useAuth } from '@/store/AuthContext';
import { useRouter } from 'next/navigation';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const WithAuth = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
};
