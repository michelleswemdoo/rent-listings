import { notFound } from 'next/navigation';
import { BackButton } from '@/components/BackButton';
import { PropertyDetails } from '@/components/PropertyDetails';
import { getListings, getProperty } from '@/lib/data-service';
import { WithAuth } from '@/components/WithAuth';

type PortfolioDetailsProps = { params: { listingsId: string } };

export type SearchProps = {
  searchParams: {
    query?: string;
    limit?: string;
    offset?: string;
  };
};

export const generateMetadata = async ({ params }: PortfolioDetailsProps) => {
  const home = await getProperty(params?.listingsId);
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

  const ids = listings?.results?.map((list) => ({
    listingsId: String(list.property_id),
  }));

  return ids;
};

const Page = async ({ params }: PortfolioDetailsProps) => {
  const home = await getProperty(params.listingsId);
  if (!home) {
    notFound();
  }
  return (
    <WithAuth>
      <div className="px-6 pb-10 pt-2 sm:px-12">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-sm font-medium text-slate-950 sm:text-xl">
            ${home?.location?.address?.line} $
            {home?.location?.address?.postal_code}
          </h1>
        </div>
        <PropertyDetails home={home!} />
      </div>
    </WithAuth>
  );
};

export default Page;
