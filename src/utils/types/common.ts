import React from 'react';

export type SidebarItem = {
  id: string;
  name: string;
  Icon: React.ReactElement;
  active?: boolean;
  comingSoon?: boolean;
  to?: string;
  onClick?: () => void;
};
