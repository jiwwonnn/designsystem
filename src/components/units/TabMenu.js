import {TabMenuStyle} from "../../assets/styles/UnitStyle";

const TabMenu = (props) => {

  const { tabMenuList, handleTabActive, className, handlePopup} = props;

  const tabActive = activeMenu => {
    handleTabActive(activeMenu)
  }



  return (
    <TabMenuStyle className={`tab_menu ${className}`}>
      <ul className="tab_list">
        {
          tabMenuList.list.map(menu => (
          <li key={menu.id}
              className="tab_item"
              onClick={() => tabActive(menu)}
              type="button"
          >
            <button
              className={`${tabMenuList.active === menu.id ? 'active' : ''}`}
            >{menu.title}</button>
          </li>
          ))
        }

      </ul>
    </TabMenuStyle>
  )
}

export default TabMenu