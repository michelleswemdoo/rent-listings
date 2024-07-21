import { BackButton } from '@/components/BackButton';
import { getListings, getProperty } from '@/lib/data-service';

type PortfolioDetailsProps = { params: { listingsId: string } };

type SearchProps = {
  searchParams?: {
    query?: string;
    limit?: string;
    offset?: string;
  };
};

export const generateMetadata = async ({ params }: PortfolioDetailsProps) => {
  const home = await getProperty(params.listingsId);
  return {
    title: `Details for ${home?.location?.address?.line} ${home?.location?.address?.postal_code}`,
  };
};

export const generateStaticParams = async ({ searchParams }: SearchProps) => {
  const limit = Number(searchParams?.limit) || 8;
  const offset = Number(searchParams?.offset) || 0;

  const listings = await getListings({
    limit: limit,
    offset: offset,
    postal_code: '90004',
    status: ['for_sale', 'ready_to_build'],
    sort: { direction: 'desc', field: 'list_date' },
  });

  const ids = listings?.results.map((list) => ({
    listingsId: String(list.property_id),
  }));

  return ids;
};

const Page = async ({ params }: PortfolioDetailsProps) => {
  const home = await getProperty(params.listingsId);
  return (
    <div className="px-12 pt-2">
      <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="text-xl font-medium text-slate-950">
          {`Details for ${home?.location?.address?.line} ${home?.location?.address?.postal_code}`}
        </h1>
      </div>
    </div>
  );
};

export default Page;
