import { matchPath, Outlet, useLocation } from 'react-router';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { ROUTES } from '@constants/routes';

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTES.HOME;
  const isDetail = matchPath(ROUTES.DETAIL, pathname) !== null;

  return (
    <>
      <Header variant={isHome ? 'home' : 'default'} />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isDetail && (
        <div aria-hidden="true" className="h-(--detail-purchase-bar-height)" />
      )}
    </>
  );
};

export default Layout;
