import { AuthForm } from '@/components/AuthForm';

export const metadata = {
  title: 'Login',
};

const page = () => {
  return (
    <div className="mx-auto my-40 px-6 md:max-w-lg">
      <AuthForm />
    </div>
  );
};

export default page;
