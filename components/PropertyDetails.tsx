import { Property } from '@/types';
import Image from 'next/image';
import {
  currencyFormatter,
  capitalizedSplitWord,
} from '@/utils/formatCurrency';
import { EyeSlashIcon, MapPinIcon, HomeIcon } from '@heroicons/react/24/solid';
import { SimpleSlider } from './Slider';

type PropertyProps = { home: Property };

export const PropertyDetails = ({ home }: PropertyProps) => {
  const typeOfhome = home?.description.type;
  const homeType = typeOfhome?.slice(0, 4) + ' ' + typeOfhome?.slice(4);
  return (
    <div className="mt-8 w-4/5 text-slate-950">
      <SimpleSlider>
        {home?.photos?.map((photo) => (
          <div className="relative h-[420px]" key={photo.href}>
            <Image
              src={photo.href}
              fill
              alt={`Home ${home?.location.address.line}`}
              sizes="100%"
              className="block rounded-lg object-cover"
            />
          </div>
        ))}
      </SimpleSlider>

      <div className="mt-4 flex flex-col gap-4">
        <h3 className="text-2xl font-bold">
          {`Price ${currencyFormatter(home?.list_price.toString())}`}
        </h3>
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-1">
            <span className="font-semibold">{home?.description?.beds}</span>
            bed
          </li>

          <li className="flex items-center gap-[2px]">
            <span className="font-semibold">{home?.description?.baths}</span>
            bath
          </li>

          <li className="flex items-center gap-[2px]">
            <span className="font-semibold">{home?.description?.sqft}</span>
            sqft
          </li>
          <li className="flex items-center gap-[2px]">
            <span className="font-semibold">{home?.description?.lot_sqft}</span>
            sqft loft
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-3">
            <HomeIcon className="size-5 capitalize text-slate-950" />
            <span className="text-lg">{capitalizedSplitWord(homeType)}</span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="size-5 text-slate-950" />
            <span className="text-lg">
              Located in the heart of the{' '}
              <span className="font-bold">{home?.location.address.city}</span>
              ,&nbsp;
              {home?.location.address.state}
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="size-5 text-slate-950" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
        <div>
          <h3 className="text-xl font-bold">Agent details</h3>
          <p className="font-medium">
            Name:&nbsp;
            {home?.consumer_advertisers[0].name
              ? home?.consumer_advertisers[0].name
              : 'Not available'}
          </p>
          <p className="font-medium">
            Contact:&nbsp;
            {home?.consumer_advertisers[0].phone
              ? home?.consumer_advertisers[0].phone
              : 'Not Available'}
          </p>
        </div>
      </div>
    </div>
  );
};
