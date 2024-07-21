import Image from 'next/image';
import bg from '@/public/bg.png';

const Page = () => {
  return (
    <div>
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top"
        alt="Mountains and forests with two houses"
      />

      <div className="relative z-10 text-center">
        <h1 className="mt-28 text-6xl font-medium tracking-tight text-white">
          The #1 site real <br />
          estate professionals trust*
        </h1>
      </div>
    </div>
  );
};

export default Page;
