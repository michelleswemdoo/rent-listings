import { SignupForm } from '@/components/SignupForm';

export const metadata = {
  title: 'Register',
};

const page = () => {
  return (
    <div className="mx-auto my-40 px-6 md:max-w-lg">
      <SignupForm />
    </div>
  );
};

export default page;
