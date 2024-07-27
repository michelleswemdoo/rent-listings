'use client';
import { useSearchParams } from 'next/navigation';

export const ListingsSkeleton = () => {
  const searchParams = useSearchParams();
  const limit = Number(searchParams.get('limit')) || 8;

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-4 lg:gap-12 xl:gap-2">
      {Array.from({ length: limit }).map((_, index) => (
        <div key={index} role="status">
          <div className="flex h-[200px] w-[300px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
            <svg
              className="size-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full p-3">
            <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>

            <div className="mb-2.5 flex items-center">
              <div className="mr-4 flex h-2.5 items-center">
                <span className="mr-1 h-full w-4 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                <span className="h-full w-10 rounded-full bg-gray-200 dark:bg-gray-700"></span>
              </div>
              <div className="mr-4 flex h-2.5 items-center">
                <span className="mr-1 h-full w-4 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                <span className="h-full w-10 rounded-full bg-gray-200 dark:bg-gray-700"></span>
              </div>
              <div className="flex h-2.5 items-center">
                <span className="mr-1 h-full w-8 rounded-full bg-gray-200 dark:bg-gray-700"></span>
                <span className="h-full w-10 rounded-full bg-gray-200 dark:bg-gray-700"></span>
              </div>
            </div>
            <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
};
