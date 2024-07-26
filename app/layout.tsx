import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import '@/styles/globals.css';
import { Layout } from '@/components/layout/Layout';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/store/AuthContext';

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
    template: '%s | The Home Listings',
    default: 'Welcome | Home Listings',
  },
  description: 'The home listings site',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <AuthProvider>
          <Layout>{children}</Layout>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
