import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';

import Order from 'Pages/Order';
import Rental from 'Pages/Rental';
import Service from 'Pages/Service';
import Invoice from 'Pages/Invoice';
import Fleet from 'Pages/Fleet';
import User from 'Pages/User';
import OrderDetails from 'ui-component/Orders/OrderDetails';
import NotFound from 'Pages/NotFound';



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'Orders',
      children: [
        {
          path: '',
          element: <Order />
        },
        {
          path: ':id', // Route with parameter
          element: <OrderDetails /> // Component to render for this route
        }
      ]
    },
    {
      path: 'Rental',
      children: [
        {
          path: '',
          element: <Rental />
        }
      ]
    },
    {
      path: 'Service',
      children: [
        {
          path: '',
          element: <Service />
        }
      ]
    },
    {
      path: 'MyInvoice',
      children: [
        {
          path: '',
          element: <Invoice />
        }
      ]
    },
    {
      path: 'MyFleet',
      children: [
        {
          path: '',
          element: <Fleet />
        }
      ]
    },
    {
      path: 'MyUsers',
      children: [
        {
          path: '',
          element: <User />
        }
      ]
    },
    {
      path: '*', // Catch-all route
      element: <NotFound /> // Component to render for undefined routes
    }
  ]
};

export default MainRoutes;
