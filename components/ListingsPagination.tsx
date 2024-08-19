'use client';

import * as React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/16/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { twJoin } from 'tailwind-merge';
import { Lists } from '@/types';

type ListingsPaginationProps = { listings: Lists; limit: number };

export const ListingsPagination = ({
  listings,
  limit,
}: ListingsPaginationProps) => {
  const perPageOptions = [8, 12, 20, 50, 100, 102];

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const page = Number(searchParams.get('page')) || 0;
  const pagesCount = Math.ceil(listings?.total! / limit);

  const pages = React.useMemo(
    () => Array.from({ length: pagesCount }, (_, i) => i + 1),
    [pagesCount],
  );
  const lastItem = pages[pages.length - 1];

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('limit', term);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const goToPage = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      aria-label="pagination"
      role="navigation"
      className="flex flex-wrap items-center justify-center gap-3 py-10 lg:justify-between lg:gap-0 xl:px-12"
    >
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
        <div className="flex flex-wrap items-center gap-1">
          <button
            aria-label="Go to previous page"
            className="group flex items-center gap-1 py-1 pr-3 transition-all duration-200 ease-out"
            disabled={page === 0 || !listings?.results}
            onClick={() => goToPage(page - 1)}
          >
            <ChevronLeftIcon
              focusable="false"
              className="size-6 text-slate-950 group-hover:text-slate-400 group-disabled:text-slate-400"
            />
            <span className="hidden text-sm font-semibold text-slate-950 underline group-hover:text-slate-400 group-disabled:text-slate-400 sm:block">
              Previous
            </span>
          </button>
          {pages.length > 0 &&
            pages.length > 5 &&
            pages.slice(0, 5).map((pageItem) => (
              <button
                disabled={page === pageItem}
                aria-current={page === pageItem ? 'true' : 'false'}
                aria-label={`Current page page ${pageItem}`}
                className={twJoin(
                  'rounded border border-slate-950 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 ease-out hover:bg-black/10',
                  page === pageItem &&
                    'bg-slate-950 text-white hover:bg-slate-800',
                )}
                key={pageItem}
                onClick={() => goToPage(pageItem)}
              >
                {pageItem}
              </button>
            ))}

          {pages.length > 0 &&
            pages.length <= 5 &&
            pages.map((pageItem) => (
              <button
                disabled={page === pageItem}
                aria-current={page === pageItem ? 'true' : 'false'}
                aria-label={`Current page page ${pageItem}`}
                className={twJoin(
                  'rounded border border-slate-950 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 ease-out hover:bg-black/10',
                  page === pageItem &&
                    'bg-slate-950 text-white hover:bg-slate-800',
                )}
                key={pageItem}
                onClick={() => goToPage(pageItem)}
              >
                {pageItem}
              </button>
            ))}

          {pages.length > 0 && pages.length > 5 && (
            <div className="px-2 py-1">
              <EllipsisHorizontalIcon className="size-6 text-slate-950" />
            </div>
          )}

          {pages.length > 0 && pages.length > 5 && (
            <button
              disabled={page === lastItem}
              aria-current={page === lastItem ? 'true' : 'false'}
              aria-label={`Current page page ${lastItem}`}
              className={twJoin(
                'rounded border border-slate-950 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 ease-out hover:bg-black/10',
                page === lastItem &&
                  'bg-slate-950 text-white hover:bg-slate-800',
              )}
              onClick={() => goToPage(lastItem)}
            >
              {lastItem}
            </button>
          )}
          <button
            aria-label="Go to next page"
            disabled={page === pagesCount}
            className="group flex items-center gap-1 py-1 pl-3 transition-all duration-200 ease-out"
            onClick={() => goToPage(page + 1)}
          >
            <span className="hidden text-sm font-semibold text-slate-950 underline group-hover:text-slate-400 group-disabled:text-slate-400 sm:block">
              Next
            </span>
            <ChevronRightIcon
              focusable="false"
              className="size-6 text-slate-950 group-hover:text-slate-400 group-disabled:text-slate-400"
            />
          </button>
        </div>
      )}
    </div>
  );
};
