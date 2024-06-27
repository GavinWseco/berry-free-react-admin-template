import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';

import Orders from 'Pages/Orders';



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Orders />
    },
    {
      path: 'Orders',
      children: [
        {
          path: '',
          element: <Orders />
        }
      ]
    },
  ]
};

export default MainRoutes;
