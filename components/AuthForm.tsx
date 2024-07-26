'use client';
import * as React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { defaultValues, loginSchema } from '@/lib/auth-schema';
// import { signIn } from 'next-auth/react';
import { loginUser } from '@/lib/auth-helpers';
import { useRouter } from 'next/navigation';

type FormData = z.infer<typeof loginSchema>;

export const AuthForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ defaultValues, resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const result = await loginUser(data.email, data.password);
      if (result?.user) toast('Successfully login');
      router.push('/listings');
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) toast(error.message);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <h1 className="mb-6 text-center text-xl font-semibold text-slate-950">
        Login to view listings
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email')}
            required
            type="email"
            placeholder="Email"
            className={`${errors.email ? 'border-[#DF4B2D] text-[#DF4B2D] focus:invalid:border-[#DF4B2D]' : ''} block w-full rounded border bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0`}
          />
          {errors?.email && (
            <span className="flex items-center gap-1 text-left text-sm text-[#DF4B2D]">
              {errors.email.message as string}
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            aria-invalid={errors.password ? 'true' : 'false'}
            {...register('password')}
            required
            type="password"
            placeholder="Password"
            className={`${errors.password ? 'border-[#DF4B2D] text-[#DF4B2D] focus:invalid:border-[#DF4B2D]' : ''} block w-full rounded border bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0`}
          />
          {errors?.password && <span>{errors.password.message as string}</span>}
        </div>
        <div className="mb-12">
          <button
            disabled={isLoading}
            className="w-full rounded-sm bg-slate-950 px-5 py-[14px] text-white disabled:bg-slate-400"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
