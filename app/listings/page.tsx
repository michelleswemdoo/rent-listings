import { ListingsPagination } from '@/components/ListingsPagination';
import { PropertyListings } from '@/components/PropertyListings';
import { getListings } from '@/lib/data-service';

type SearchProps = {
  searchParams?: {
    query?: string;
    limit?: string;
    offset?: string;
  };
};

const Page = async ({ searchParams }: SearchProps) => {
  const limit = Number(searchParams?.limit) || 8;
  const offset = Number(searchParams?.offset) || 0;

  const listings = await getListings({
    limit: limit,
    offset: offset,
    postal_code: '90004',
    status: ['for_sale', 'ready_to_build'],
    sort: { direction: 'desc', field: 'list_date' },
  });

  return (
    <div className="px-12 py-10">
      <h1 className="mb-5 text-4xl font-medium text-slate-950">Browse homes</h1>
      {/* <div className="mb-8 flex justify-end">
        <Filter />
      </div> */}

      {/* <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense> */}
      <PropertyListings listings={listings!} />
      <ListingsPagination limit={limit} listings={listings!} />
    </div>
  );
};

export default Page;
