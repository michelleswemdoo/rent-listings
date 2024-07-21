import Link from 'next/link';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <header className="sticky inset-0 z-[9999] w-full bg-white shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex w-[75rem] items-center px-12 py-2">
        <Link className="text-lg font-medium text-slate-800" href="/">
          Logo
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
