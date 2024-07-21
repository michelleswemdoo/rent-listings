import { Lists } from '@/types';
import { PropertyListingsCard } from './PropertyListingsCard';

type PropertyListingsProps = {
  listings: Lists;
};

export const PropertyListings = ({ listings }: PropertyListingsProps) => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-4 lg:gap-12 xl:gap-2">
      {listings?.results?.length > 0 &&
        listings?.results?.map((list) => (
          <PropertyListingsCard list={list} key={list.listing_id} />
        ))}
    </div>
  );
};
