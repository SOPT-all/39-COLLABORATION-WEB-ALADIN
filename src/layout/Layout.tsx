import { Outlet } from 'react-router';

import Footer from '@components/Footer';

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
