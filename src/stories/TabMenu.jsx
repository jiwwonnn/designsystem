import React from 'react';
import PropTypes from 'prop-types';
import './tabmenu.css';
import {TabMenuStyle} from "./UnitStyle";

export const TabMenu = ({ tabMenuList, handleTabActive, className }) => {
  return (
    <TabMenuStyle className={`tab_menu ${className}`}>
      <ul className="tab_list">
        {
          tabMenuList.list.map(menu => (
            <li
              key={menu.id}
              className={`tab_item ${tabMenuList.active === menu.id ? 'active' : ''}`}
              onClick={() => handleTabActive(menu)}
              role="button"
              tabIndex="0"
            >
              <button className={`${tabMenuList.active === menu.id ? 'active' : ''}`}>
                {menu.title}
              </button>
            </li>
          ))
        }
      </ul>
    </TabMenuStyle>
  );
};

TabMenu.propTypes = {
  tabMenuList: PropTypes.shape({
    active: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  handleTabActive: PropTypes.func.isRequired,
  className: PropTypes.string
};

TabMenu.defaultProps = {
  className: ''
};
