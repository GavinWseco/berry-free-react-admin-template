// assets
import { IconDashboard, IconTrack, IconTruck } from '@tabler/icons-react';

// constant
const icons = { IconTruck };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'Orders',
  title: 'Orders',
  type: 'group',
  children: [
    {
      id: 'Orders',
      title: 'Orders',
      type: 'item',
      url: '/Orders',
      icon: icons.IconTruck,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
