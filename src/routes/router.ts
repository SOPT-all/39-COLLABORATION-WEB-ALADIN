import { createBrowserRouter } from 'react-router';

import { ROUTES } from '@constants/routes';

import Layout from '../layout/Layout';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: Layout,
    HydrateFallback: () => null,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@pages/home/HomePage')).default,
        }),
      },
      {
        path: ROUTES.COMPARE,
        lazy: async () => ({
          Component: (await import('@pages/compare/ComparePage')).default,
        }),
      },
      {
        path: ROUTES.DETAIL,
        lazy: async () => ({
          Component: (await import('@pages/detail/DetailPage')).default,
        }),
      },
      {
        path: ROUTES.CART,
        lazy: async () => ({
          Component: (await import('@pages/cart/CartPage')).default,
        }),
      },
      ...(import.meta.env.DEV
        ? [
            {
              path: '/components',
              lazy: async () => ({
                Component: (await import('@pages/components/ComponentsPage'))
                  .default,
              }),
            },
          ]
        : []),
      {
        path: '*',
        lazy: async () => ({
          Component: (await import('@pages/notFound/NotFoundPage')).default,
        }),
      },
    ],
  },
]);
