import { useRef, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import Button from '../components/units/Button';
import Textarea from '../components/units/Textarea';
import Input from '../components/units/Input';
import RadioButton from '../components/units/RadioButton';
import Checkbox from '../components/units/Checkbox';
import Select from '../components/units/Select';
import TabMenu from '../components/units/TabMenu';
import Pagination from '../components/units/Pagination';
import ToggleSwitch from '../components/units/ToggleSwitch';









const ComponentConfig = () => {
  const selectRef1 = useRef(null);
  const selectRef2 = useRef(null);
  const selectRef3 = useRef(null);



  const handleBtnOnClick = (type) => {
    console.log('클릭한 아이콘 타입 ==> ', type);
    //타입에 따른 로직 작성
    if (type === '') {
      // 처리 로직
    }
  };

  // select
  const selectList = {
    active: 'select01',
    list: [
      { id: 'select01', value: '셀렉트01' },
      { id: 'select02', value: '셀렉트02' },
      { id: 'select03', value: '셀렉트03' }
    ]
  };
  const handleSelectCustom = (active) => {
    console.log('선택한 옵션', active);
  };

  // tab menu
  const [tabMenu, setTabMenu] = useState({
    active: 'tab01',
    list: [
      { id: 'tab01', title: '탭메뉴'},
      { id: 'tab02', title: '탭메뉴'},
      { id: 'tab03', title: '탭메뉴'},
    ]
  })

  const handleTabActive = (activeMenu) => {
    setTabMenu({
      ...tabMenu,
      active: activeMenu.id
    })
  }

  // pagination
  const handlePaging = async (param) => {
    console.log("handlePaging-->", param);
  };

  const [isOn, setIsOn] = useState(false);

  const handleActive = () => {
    setIsOn(!isOn);
  };


  return [
    /******************************************************************************************************************************
     * button 버튼
     ******************************************************************************************************************************/
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** theme(color) + variant(linear, fill, round) **/}
        <Button variant={'linear'} theme={'purple'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button variant={'linear'} theme={'purple'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** theme(color) + variant(linear, fill, round) **/}
        <Button variant={'linear'} theme={'blue'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button variant={'linear'} theme={'blue'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** theme(color) + variant(linear, fill, round) **/}
        <Button variant={'fill'} theme={'purple'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button variant={'fill'} theme={'purple'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** theme(color) + variant(linear, fill, round) **/}
        <Button variant={'rounded'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button variant={'rounded'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** size (sm, md, lg, full) **/}
        <Button size={'sm'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button size={'sm'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** size (sm, md, lg, full) **/}
        <Button size={'md'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button size={'md'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** size (sm, md, lg, full) **/}
        <Button size={'lg'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button size={'lg'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** size (sm, md, lg, full) **/}
        <Button size={'full'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button size={'full'} handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },
    {
      group: `button`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** disabled **/}
        <Button disabled handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Button disabled handleBtnOnClick={handleBtnOnClick}>버튼</Button>
        </>
      )
    },



    /******************************************************************************************************************************
     * textarea 텍스트영역
     ******************************************************************************************************************************/
    {
      group: `textarea`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** 기본 **/}
        <Textarea />
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Textarea />
        </>
      )
    },
    {
      group: `textarea`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** count(글자수 제한) + plcaeholder **/}
        <Textarea count={150} placeholder={"placeholder"}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Textarea count={150} placeholder={"placeholder"}/>
        </>
      )
    },
    {
      group: `textarea`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** plcaeholder + readonly **/}
        <Textarea readOnly placeholder={"placeholder"}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Textarea readOnly placeholder={"placeholder"}/>
        </>
      )
    },
    {
      group: `textarea`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** plcaeholder + error **/}
        <Textarea placeholder={"placeholder"} error={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Textarea placeholder={"placeholder"} error={true}/>
        </>
      )
    },



    /******************************************************************************************************************************
     * input 인풋
     ******************************************************************************************************************************/
    {
      group: `input`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** placeholder, error **/}
        <Input placeholder={'placeholder'} error={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Input placeholder={'placeholder'} error={true}/>
        </>
      )
    },
    {
      group: `input`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** placeholder, error **/}
        <Input placeholder={'placeholder'} error={false}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Input placeholder={'placeholder'} error={false}/>
        </>
      )
    },
    {
      group: `input`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** disabled , placeholder **/}
        <Input disabled placeholder={'disabled'} />
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Input disabled placeholder={'disabled.'}/>
        </>
      )
    },
    {
      group: `input`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** readonly , placeholder **/}
        <Input readOnly placeholder={'readonly'}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Input readOnly placeholder={'readonly'}/>
        </>
      )
    },



    /******************************************************************************************************************************
     * radio 라디오
     ******************************************************************************************************************************/
    {
      group: `radio`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** text,defaultChecked **/}
        <RadioButton className={''} text={'라디오1'} name={'radio01'} defaultChecked={true}/>
        <RadioButton className={''} text={'라디오2'} name={'radio01'}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <RadioButton className={''} text={'라디오1'} name={'radio01'} defaultChecked={true}/>
          <RadioButton className={''} text={'라디오2'} name={'radio01'}/>
        </>
      )
    },
    {
      group: `radio`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** classname='check' **/}
        <RadioButton className={'check'} text={'라디오1'} name={'radio02'} defaultChecked={true} />
        <RadioButton className={'check'} text={'라디오2'} name={'radio02'} />
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <RadioButton className={'check'} text={'라디오1'} name={'radio02'} defaultChecked={true} />
          <RadioButton className={'check'} text={'라디오2'} name={'radio02'} />
        </>
      )
    },
    {
      group: `radio`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** disabled **/}
        <RadioButton className={''} text={'라디오1'} name={'radio03'} defaultChecked={true} disabled={true}/>
        <RadioButton className={''} text={'라디오2'} name={'radio03'} disabled={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <RadioButton className={''} text={'라디오1'} name={'radio03'} defaultChecked={true} disabled={true}/>
          <RadioButton className={''} text={'라디오2'} name={'radio03'} disabled={true}/>
        </>
      )
    },


    /******************************************************************************************************************************
     * checkbox 체크박스
     ******************************************************************************************************************************/
    {
      group: `checkBox`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** 기본 **/}
        <Checkbox className={''} text={'기본'} defaultChecked={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Checkbox className={''} text={'기본'} defaultChecked={true}/>
        </>
      )
    },
    {
      group: `checkBox`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** className='ghost' **/}
        <Checkbox className={'ghost'} text={'ghost'} defaultChecked={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Checkbox className={'ghost'} text={'ghost'} defaultChecked={true}/>
        </>
      )
    },
    {
      group: `checkBox`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** className='circle' **/}
        <Checkbox className={'circle'} text={'circle'} defaultChecked={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Checkbox className={'circle'} text={'circle'} defaultChecked={true}/>
        </>
      )
    },
    {
      group: `checkBox`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** className='circle'ghost **/}
        <Checkbox className={'circle ghost'} text={'circle ghost'} defaultChecked={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Checkbox className={'circle ghost'} text={'circle ghost'} defaultChecked={true}/>
        </>
      )
    },
    {
      group: `checkBox`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** disabled **/}
        <Checkbox className={''} text={'disabled'} defaultChecked={true} disabled={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Checkbox className={''} text={'disabled'} defaultChecked={true} disabled={true}/>
        </>
      )
    },
    {
      group: `checkBox`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** circle disabled **/}
        <Checkbox className={'circle'} text={'circle disabled'} defaultChecked={true} disabled={true}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Checkbox className={'circle'} text={'circle disabled'} defaultChecked={true} disabled={true}/>
        </>
      )
    },
    /******************************************************************************************************************************
     * select 셀렉트박스
     ******************************************************************************************************************************/
    {
      group: `select`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** 기본 **/}
        <Select className={''} ref={selectRef1} optionList={selectList} handleSelect={handleSelectCustom}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Select className={''} ref={selectRef1} optionList={selectList} handleSelect={handleSelectCustom}/>
        </>
      )
    },
    {
      group: `select`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** placeholder **/}
        <Select className={''} ref={selectRef2} optionList={selectList} handleSelect={handleSelectCustom} placeholder={'default text'}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Select className={''} ref={selectRef2} optionList={selectList} handleSelect={handleSelectCustom} placeholder={'default text'}/>
        </>
      )
    },
    {
      group: `select`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** className='disabled' **/}
        <Select className={'disabled'} ref={selectRef3} optionList={selectList} handleSelect={handleSelectCustom}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Select className={'disabled'} ref={selectRef3} optionList={selectList} handleSelect={handleSelectCustom}/>
        </>
      )
    },



    /******************************************************************************************************************************
     * tab 탭메뉴
     ******************************************************************************************************************************/
    {
      group: `tab`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** 기본 **/}
        <TabMenu className={''} tabMenuList={tabMenu} handleTabActive={handleTabActive}/>
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <TabMenu className={''} tabMenuList={tabMenu} handleTabActive={handleTabActive}/>
        </>
      )
    },


    /******************************************************************************************************************************
     * pagination 페이지네이션
     ******************************************************************************************************************************/
    {
      group: `pagination`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** 기본 **/}
        <Pagination
          pagingData={{
            dataTotal: 100, //전체 데이터 수
            blockData: 10, //블럭당 데이터수
            activePage: 1, //현재페이지
            blockGroup: 5, //페이징을 몇개 단위로 생성할것인지
            activeLastBtn: true, //맨처음 + 맨마지막 버튼 활성화
          }}
          handlePaging={handlePaging} //페이지네이션 클릭 액션값
        />
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <Pagination
            pagingData={{
              dataTotal: 100, //전체 데이터 수
              blockData: 10, //블럭당 데이터수
              activePage: 1, //현재페이지
              blockGroup: 5, //페이징을 몇개 단위로 생성할것인지
              activeLastBtn: true, //맨처음 + 맨마지막 버튼 활성화
            }}
            handlePaging={handlePaging} //페이지네이션 클릭 액션값
          />
        </>
      )
    },

    /******************************************************************************************************************************
     * toggleSwitch 토글 스위치
     ******************************************************************************************************************************/
    {
      group: `toggleswitch`,
      componentCode: (
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
        {/** 기본 **/}
        <ToggleSwitch isOn={isOn} handleActive={handleActive} />
        `}
        </SyntaxHighlighter >
      ),
      render: (
        <>
          <ToggleSwitch isOn={isOn} handleActive={handleActive} />
        </>
      )
    },
    
    
  ]

}

export { ComponentConfig }