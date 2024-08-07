// assets
import { IconBackhoe, IconBulldozer, IconDashboard, IconFileDollar, IconPackage, IconPackages, IconTool, IconTrack, IconTruck, IconUser, IconUsers } from '@tabler/icons-react';

// constant
const icons = { IconTruck, IconBulldozer, IconDashboard, IconFileDollar, IconUser, IconBackhoe, IconUsers, IconPackages, IconTool };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Services',
  type: 'group',
  children: [
    {
      id: 'parts-orders',
      title: 'Parts Orders',
      type: 'item',
      url: '/Orders',
      icon: icons.IconPackages,
      breadcrumbs: false
    },
    {
      id: 'rentals',
      title: 'Rentals',
      type: 'item',
      url: '/Rental',
      icon: icons.IconBackhoe,
      breadcrumbs: false
    },
    {
      id: 'service',
      title: 'Service',
      type: 'item',
      url: '/Service',
      icon: icons.IconTool,
      breadcrumbs: false
    },
    {
      id: 'my-invoice',
      title: 'My Invoice',
      type: 'item',
      url: '/MyInvoice',
      icon: icons.IconFileDollar,
      breadcrumbs: false
    },
    {
      id: 'my-fleet',
      title: 'My Fleet',
      type: 'item',
      url: '/MyFleet',
      icon: icons.IconBulldozer,
      breadcrumbs: false
    },
    {
      id: 'my-users',
      title: 'My Users',
      type: 'item',
      url: '/MyUsers',
      icon: icons.IconUsers,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
