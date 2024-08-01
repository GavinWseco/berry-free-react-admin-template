import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';

import Order from 'Pages/Order';



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Order />
    },
    {
      path: 'Orders',
      children: [
        {
          path: '',
          element: <Order />
        }
      ]
    },
  ]
};

export default MainRoutes;
