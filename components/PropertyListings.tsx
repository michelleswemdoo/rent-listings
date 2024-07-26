import { getListings } from '@/lib/data-service';
import { ListingsOptions } from '@/types';
import { PropertyListingsCard } from './PropertyListingsCard';
import { ListingsPagination } from './ListingsPagination';

export const PropertyListings = async ({ limit, offset }: ListingsOptions) => {
  const listings = await getListings({
    limit: limit,
    offset: offset,
    postal_code: '90004',
    status: ['for_sale', 'ready_to_build'],
    sort: { direction: 'desc', field: 'list_date' },
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3">
        {listings?.results.map((list) => (
          <PropertyListingsCard list={list} key={list.listing_id} />
        ))}
      </div>
      <ListingsPagination limit={limit} listings={listings!} />
    </>
  );
};
