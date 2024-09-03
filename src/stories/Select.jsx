import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectStyle } from "./UnitStyle";

export const Select = ({ className = '', optionList, handleSelectActive, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(optionList.active);
  const [showSelectBox, setShowSelectBox] = useState(false);

  const onSelectActive = (selected) => {
    setShowSelectBox(false);
    setSelectedOption(selected);
    handleSelectActive && handleSelectActive(selected);
  };

  const toggleSelectBox = () => {
    setShowSelectBox(!showSelectBox);
  };


  /***************************************************************************************************
   * *************************************************************************************************
   *
   * 실제 작업 코드는 Select.js 파일을 확인 storybook 에서 select 추가 방법 모르겠음
    <Select className={''} ref={selectRef1} optionList={selectList} handleSelect={handleSelectCustom}/>

   ****************************************************************************************************/


  return (
    <SelectStyle className={`select_custom active ${className}`} style={{width: '500px'}}>
      <div className="select_custom_inner">
        <div className="option_item selected" onClick={toggleSelectBox} style={{ boxSizing :'border-box'}}>
          <div className="option_show_txt">
            {placeholder && !showSelectBox && (
              <div className={`placeholder ellipsis`}>
                {placeholder}
              </div>
            )}
            {showSelectBox || !placeholder ? (
              <div className="cnt_wrap">
                {optionList.list.find(opt => opt.id === selectedOption)?.img && (
                  <img className="img" src={optionList.list.find(opt => opt.id === selectedOption).img} style={{ display: "inline-flex" }} />
                )}
                {optionList.list.find(opt => opt.id === selectedOption)?.svg && (
                  <div className="ico_svg">{optionList.list.find(opt => opt.id === selectedOption).svg}</div>
                )}
                <p className="txt ellipsis">{optionList.list.find(opt => opt.id === selectedOption).value}</p>
              </div>
            ) : null}
          </div>
        </div>

          <ul className="option_list scroll" style={{boxSizing: 'border-box'}}>
            {optionList.list.map((opt, idx) => (
              selectedOption !== opt.id && (
                <li className="option_item" key={opt.id + '_' + idx} onClick={() => onSelectActive(opt.id)}>
                  <div className="cnt_wrap">
                    {opt.img && <img className="img" src={opt.img} />}
                    {opt.svg && <div className="ico_svg">{opt.svg}</div>}
                    <p className="txt ellipsis">{opt.value}</p>
                  </div>
                </li>
              )
            ))}
          </ul>
      </div>
    </SelectStyle>
  );
};

Select.propTypes = {
  /**
   * className for custom styling
   */
  className: PropTypes.string,
  /**
   * List of options for the select dropdown
   */
  optionList: PropTypes.shape({
    active: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      img: PropTypes.string,
      svg: PropTypes.element,
    })).isRequired
  }).isRequired,
  /**
   * Placeholder text for the select box
   */
  placeholder: PropTypes.string,
  /**
   * Callback when an option is selected
   */
  handleSelectActive: PropTypes.func,
};

Select.defaultProps = {
  className: '',
  placeholder: 'Select an option',
};

export default Select;
