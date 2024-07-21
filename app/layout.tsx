import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import '@/styles/globals.css';
import { Layout } from '@/components/layout/Layout';

type RootLayoutProps = {
  children?: React.ReactNode;
};

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: {
    template: '%s / The Home Listings',
    default: 'Welcome / Home Listings',
  },
  description: 'The home listings site',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
