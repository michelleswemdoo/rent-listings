import { Header } from './Header';
// import { MarketingFooter } from './MarketingFooter';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />

      <main>{children}</main>

      {/* <MarketingFooter /> */}
    </div>
  );
};
