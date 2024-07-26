'use client';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export const SignOutButton = () => {
  const router = useRouter();

  return (
    <button
      className="ml-4 inline-block rounded-sm bg-slate-950 px-5 py-1 text-sm font-medium text-white"
      onClick={() => {
        signOut(auth);
        router.push('/');
      }}
    >
      Sign out
    </button>
  );
};
