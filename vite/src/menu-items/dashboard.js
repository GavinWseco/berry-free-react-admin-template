// assets
import { IconBackhoe, IconBulldozer, IconDashboard, IconFileDollar, IconPackage, IconPackages, IconTool, IconTrack, IconTruck, IconUser, IconUsers } from '@tabler/icons-react';

// constant
const icons = { IconTruck, IconBulldozer, IconDashboard, IconFileDollar, IconUser, IconBackhoe, IconUsers, IconPackages, IconTool };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'Orders',
  title: 'Services',
  type: 'group',
  children: [
    {
      id: 'Orders',
      title: 'Parts Orders',
      type: 'item',
      url: '/Orders',
      icon: icons.IconPackages,
      breadcrumbs: false
    },
    {
      id: 'Orders',
      title: 'Rentals',
      type: 'item',
      url: '/Orders',
      icon: icons.IconBackhoe,
      breadcrumbs: false
    },
    {
      id: 'Orders',
      title: 'Service',
      type: 'item',
      url: '/Orders',
      icon: icons.IconTool,
      breadcrumbs: false
    },
    {
      id: 'Orders',
      title: 'My Invoice',
      type: 'item',
      url: '/Orders',
      icon: icons.IconFileDollar,
      breadcrumbs: false
    },
    {
      id: 'Orders',
      title: 'My Fleet',
      type: 'item',
      url: '/Orders',
      icon: icons.IconBulldozer,
      breadcrumbs: false
    },
    {
      id: 'Orders',
      title: 'My Users',
      type: 'item',
      url: '/Orders',
      icon: icons.IconUsers,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
