'use client';

import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      aria-label="back to search result"
      data-testid="back button"
      type="button"
      className="flex cursor-pointer items-center gap-1 text-slate-950 underline"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon
        className="size-6 text-slate-950"
        aria-hidden="true"
        focusable="false"
        data-testid="Chevron-Left-Icon"
      />
      <span>Back</span>
    </button>
  );
};
