import {useState} from "react";
import TabMenu from "./units/TabMenu";
import {ComponentConfig} from "./ComponentConfig";

const ComponentList = () => {

  // -----------------TabMenu : 컴포넌트 리스트 -----------------
  const [tabMenu, setTabMenu] = useState({
    active: 'button',
    list: [
      { id: 'button', title: 'Button'},
      { id: 'textarea', title: 'Textarea'},
      { id: 'input', title: 'Input'},
      { id: 'radio', title: 'Radio'},
      { id: 'checkBox', title: 'CheckBox'},
      { id: 'select', title: 'Select'},
      { id: 'tab', title: 'Tab'},
      { id: 'pagination', title: 'Pagination'},
    ]
  })

  const handleTabActive = (activeMenu) => {
    setTabMenu({
      ...tabMenu,
      active: activeMenu.id
    })
  }



  return (
    <div className="l__component">
      <div className="l__component_list">
        <div style={{ fontSize: '25px', fontWeight: '700' }}>
          props는 해당 컴포넌트 주석 참고
          <div
            style={{
              fontSize: '16px',
              fontWeight: '500',
              marginTop: '10px',
              marginBottom: '10px'
            }}
          >
            &nbsp;&nbsp;&nbsp;경로 : 경로 입력
          </div>
          {tabMenu.active === 'button' ? (
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '20px',
                  backgroundColor: '#f4f4f4'
                }}
              >
                <span style={{fontWeight:700, color:"orange"}}>import경로</span>
                <br />
                경로 입력
                <div style={{fontSize: 20, fontWeight:700, color:"red"}}>theme 없애고 class로 변경, hover도 그 후 작업 예정</div>
                <br /><br />
                callback 함수 : handleBtnOnClick
                <span style={{fontWeight:700, marginLeft:"10px", color:"blue"}}>아래코드 복붙</span>
                <br /><br />
                {`const handleBtnOnClick = (type) => {
                  console.log("클릭한 아이콘 타입 ==> ", type);
                  if (type === "") {
                    
                  }
                };`}
              </div>
            ) : tabMenu.active === 'textarea' ? (
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '20px',
                  backgroundColor: '#f4f4f4'
                }}
              >
                <span style={{fontWeight:700, color:"orange"}}>import경로</span>
                <br />
                경로 입력
              </div>
            ) : tabMenu.active === 'input' ? (
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '20px',
                  backgroundColor: '#f4f4f4'
                }}
              >
                <span style={{fontWeight:700, color:"orange"}}>import경로</span>
                <br />
                경로 입력
                <br /><br />
              </div>
          ) : tabMenu.active === 'radio' ? (
            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                padding: '20px',
                backgroundColor: '#f4f4f4'
              }}
            >
              <span style={{fontWeight:700, color:"orange"}}>import경로</span>
              <br />
              경로 입력
            </div>
          ) : tabMenu.active === 'checkBox' ? (
            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                padding: '20px',
                backgroundColor: '#f4f4f4'
              }}
            >
              <span style={{fontWeight:700, color:"orange"}}>import경로</span>
              <br />
              경로 입력
            </div>
          ) : tabMenu.active === 'select' ? (
            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                padding: '20px',
                backgroundColor: '#f4f4f4'
              }}
            >
              <span style={{fontWeight:700, color:"orange"}}>import경로</span>
              <br />
              경로 입력
              <br /><br />
              callback 함수 : handleSelectCustom
              <span style={{fontWeight:700, marginLeft:"10px", color:"blue"}}>아래코드 복붙</span>
              <br /><br />
              {`const selectList = {
                active: 'select01',
                list: [
                  { id: 'select01', value: '셀렉트01' },
                  { id: 'select02', value: '셀렉트02' },
                  { id: 'select03', value: '셀렉트03' }
                ]
              };`}
              <br /><br />
              {`
                  const handleSelectCustom = (active) => {
                      console.log('선택한 옵션', active)
                    }`}
            </div>
          ) : tabMenu.active === 'tab' ? (
            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                padding: '20px',
                backgroundColor: '#f4f4f4'
              }}
            >
              <span style={{fontWeight:700, color:"orange"}}>import경로</span>
              <br />
              경로 입력
              <br /><br />
              callback 함수 : handleTabActive
              <span style={{fontWeight:700, marginLeft:"10px", color:"blue"}}>아래코드 복붙</span>
              <br /><br />
              {`const [tabMenu, setTabMenu] = useState({
                active: 'tab01',
                list: [
                  { id: 'tab01', title: '탭메뉴'},
                  { id: 'tab02', title: '탭메뉴'},
                  { id: 'tab03', title: '탭메뉴'},
                ]
              })`}
              <br/><br/>
              {`const handleTabActive = (activeMenu) => {
                      setTabMenu({
                        ...tabMenu,
                        active: activeMenu.id
                      })
                    }`}
            </div>
          ) : tabMenu.active === 'pagination' ? (
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  padding: '20px',
                  backgroundColor: '#f4f4f4'
                }}
              >
                <span style={{fontWeight:700, color:"orange"}}>import경로</span>
                <br />
                경로 입력
              </div>
            ) : (
            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                padding: '20px',
                backgroundColor: '#f4f4f4'
              }}
            ></div>
          )}
        </div>

        <TabMenu tabMenuList={tabMenu} handleTabActive={handleTabActive} />
        <table>
          <thead>
          <th className="num">번호</th>
          <th className="group">그룹</th>
          <th className="description">컴포넌트</th>
          <th className="result">결과</th>
          </thead>
          <tbody>
          {ComponentConfig()?.map((item, idx) => {
            if (item.group === tabMenu.active) {
              return (
                <>
                  <tr key={idx}>
                    <td className="num">{idx}</td>
                    <td className="group">{item.group}</td>
                    <td className="description">{item.componentCode}</td>
                    <td className="result">{item.render}</td>
                  </tr>
                </>
              )
            } else if (tabMenu.active === 'all') {
              return (
                <tr key={idx}>
                  <td className="num">{idx}</td>
                  <td className="group">{item.group}</td>
                  <td className="description">{item.componentCode}</td>
                  <td className="result">{item.render}</td>
                </tr>
              )
            } else {
              return null
            }
          })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComponentList