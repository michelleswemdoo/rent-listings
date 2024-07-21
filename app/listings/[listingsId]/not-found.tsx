import Link from 'next/link';

function NotFound() {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">
        This Property could not be found :(
      </h1>
      <Link
        href="/listings"
        className="inline-block bg-slate-800 px-6 py-3 text-lg text-white"
      >
        Back to all Listings
      </Link>
    </main>
  );
}

export default NotFound;
