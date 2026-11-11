import { Outlet, useLocation } from 'react-router';

import Header from '@components/Header';
import { ROUTES } from '@constants/routes';

const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTES.HOME;

  return (
    <>
      <Header variant={isHome ? 'home' : 'default'} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
