import React, { useState } from 'react';
import { TabMenu } from './TabMenu';

export default {
  title: 'Example/TabMenu',
  component: TabMenu,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  const [tabMenu, setTabMenu] = useState({
    active: 'tab01',
    list: [
      { id: 'tab01', title: '탭메뉴 1' },
      { id: 'tab02', title: '탭메뉴 2' },
      { id: 'tab03', title: '탭메뉴 3' },
    ]
  });

  const handleTabActive = (activeMenu) => {
    setTabMenu({
      ...tabMenu,
      active: activeMenu.id
    });
  };

  return (
    <TabMenu
      tabMenuList={tabMenu}
      handleTabActive={handleTabActive}
    />
  );
};

