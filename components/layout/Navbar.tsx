'use client';
import Link from 'next/link';
import { ListingRoute, loginRoute } from '@/config/paths';
import { SignOutButton } from '../SignOutButton';
import { useAuth } from '@/store/AuthContext';

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav role="navigation">
      <ul className="flex items-center justify-between">
        {user?.email && (
          <div className="flex">
            <li className="ml-8" role="presentation">
              <Link
                href={ListingRoute.url}
                className="text-sm font-bold tracking-wider text-slate-800 transition-all duration-200 ease-linear hover:text-slate-950"
              >
                {ListingRoute.text}
              </Link>
            </li>
          </div>
        )}

        <div className="flex items-center">
          {!user?.email && (
            <li className="inline-block">
              <Link
                className="block w-full text-sm font-bold tracking-wider text-slate-800 transition-all duration-200 ease-linear hover:text-slate-950"
                href="/login"
              >
                {loginRoute.text}
              </Link>
            </li>
          )}

          {user?.email ? (
            <SignOutButton />
          ) : (
            <li className="ml-4" role="presentation">
              <Link
                href="/register"
                className="w-full rounded-sm bg-slate-950 px-5 py-1 text-sm font-medium text-white"
              >
                Sign up
              </Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};
