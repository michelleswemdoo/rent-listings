import { Suspense } from 'react';
import { Metadata } from 'next';
import { ListingsSkeleton } from '@/components/ListingsSkeleton';
import { PropertyListings } from '@/components/PropertyListings';
import { WithAuth } from '@/components/WithAuth';

type SearchProps = {
  searchParams?: {
    limit?: string;
    page?: string;
  };
};

export const metadata: Metadata = {
  title: 'Listings',
};

const Page = async ({ searchParams }: SearchProps) => {
  const limit = Number(searchParams?.limit) || 8;
  const page = Number(searchParams?.page) || 0;

  return (
    <WithAuth>
      <div className="min-h-min px-6 py-10 md:px-12">
        <h1 className="mb-5 text-2xl font-medium text-slate-950 md:text-4xl">
          Browse homes
        </h1>
        <Suspense key={page} fallback={<ListingsSkeleton />}>
          <PropertyListings limit={limit} offset={page} />
        </Suspense>
      </div>
    </WithAuth>
  );
};

export default Page;
