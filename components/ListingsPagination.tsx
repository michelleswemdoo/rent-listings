'use client';
import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Lists } from '@/types';
import { twJoin } from 'tailwind-merge';

type ListingsPaginationProps = { listings: Lists; limit: number };

export const ListingsPagination = ({
  limit,
  listings,
}: ListingsPaginationProps) => {
  const perPageOptions = [8, 12, 20, 50, 100, 102];

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const offset = Number(searchParams.get('offset')) || 0;
  const pagesCount = Math.ceil(listings?.total! / limit);

  const pages = React.useMemo(
    () => Array.from({ length: pagesCount }, (_, i) => i + 1),
    [pagesCount],
  );

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('limit', term);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const goToPage = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('offset', pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-between px-12 py-10">
      {listings?.results?.length > 0 && (
        <div>
          <label className="flex items-center">
            <span className="mr-3 text-sm text-[#a0aec0]">Show Result</span>

            <select
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={searchParams.get('limit')?.toString()}
              className="cursor-pointer rounded-md border border-[#d5d5d8] p-1 font-semibold accent-[#d4d4df]"
            >
              {perPageOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
      )}

      {listings?.results?.length > 0 && (
        <div className="flex gap-1">
          <button
            className="group px-3 py-1"
            disabled={offset === 0 || !listings?.results}
            onClick={() => goToPage(offset - 1)}
          >
            <ChevronLeftIcon className="size-6 text-slate-950 group-disabled:text-slate-400" />
          </button>

          {pages.length > 0 &&
            pages.map((page) => (
              <button
                className={twJoin(
                  'rounded px-3 py-1 text-slate-950',
                  offset === page && 'bg-slate-950 text-white',
                )}
                key={page}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}

          <button
            disabled={limit === listings?.results?.length - 1}
            className="group px-3 py-1"
            onClick={() => goToPage(offset + 1)}
          >
            <ChevronRightIcon className="size-6 text-slate-950 group-disabled:text-slate-400" />
          </button>
        </div>
      )}
    </div>
  );
};
