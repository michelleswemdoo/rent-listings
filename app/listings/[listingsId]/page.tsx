import { notFound } from 'next/navigation';
import { BackButton } from '@/components/BackButton';
import { PropertyDetails } from '@/components/PropertyDetails';
import { getListings, getProperty } from '@/lib/data-service';
import { WithAuth } from '@/components/WithAuth';
import { Lists } from '@/types';

type PageParams = Record<string, string>[];

type PageProps = {
  params: { listingsId: string };
};

export const generateMetadata = async ({ params }: PageProps) => {
  const home = await getProperty(params?.listingsId);
  return {
    title: `Details for ${home?.location?.address?.line} ${home?.location?.address?.postal_code}`,
  };
};

export const generateStaticParams = async (): Promise<PageParams> => {
  const listings = (await getListings({
    limit: 8,
    offset: 0,
    postal_code: '90004',
    status: ['for_sale', 'ready_to_build'],
    sort: { direction: 'desc', field: 'list_date' },
  })) as Lists;

  const ids = listings?.results?.map((list) => ({
    listingsId: String(list.property_id),
  }));

  return ids;
};

const Page = async ({ params }: PageProps) => {
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
