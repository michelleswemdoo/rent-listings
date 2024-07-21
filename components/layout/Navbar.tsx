import Link from 'next/link';
import { ListingRoute, loginRoute } from '@/config/paths';

export const Navbar = async () => {
  return (
    <nav className="w-full" role="navigation">
      <ul className="flex items-center">
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
        <div className="ml-auto flex items-center">
          {/* {session?.user?.image ? (
            <li>
              <Link className="app-nav-link" href={loginRoute.url}>
                <img
                  className="h-8 rounded-full"
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
              </Link>
            </li>
          ) : ( */}
          <li>
            <Link
              className="text-sm font-bold tracking-wider text-slate-800 transition-all duration-200 ease-linear hover:text-slate-950"
              href={loginRoute.url}
            >
              {loginRoute.text}
            </Link>
          </li>
          {/* )} */}

          <li className="ml-8" role="presentation">
            <button>Sign up</button>
          </li>
        </div>
      </ul>
    </nav>
  );
};
