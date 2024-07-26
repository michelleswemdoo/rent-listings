'use client';

type ErrorProps = { error: Error & { digest?: string }; reset: () => void };

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-slate-800 px-6 py-3 text-lg text-slate-800"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
