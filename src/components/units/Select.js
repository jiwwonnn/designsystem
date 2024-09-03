import {forwardRef, useState} from "react";
import {SelectStyle} from "../../assets/styles/UnitStyle";

const Select = (props, ref) => {

  const {className='',  optionList, handleSelectActive , placeholder } = props

  const [selectList, setSelectList] = useState(optionList)
  const [showSelectBox, setShowSelectBox] = useState(false);      //첫 랜더링시 false 상태로 opt.value값 숨김처리

  //셀렉트 리스트에서 opt.value를 선택할 시 숨김처리 해제
  const handleValueChange = () => {
    setShowSelectBox(true);
  };

  const onSelectActive = (selected) => {
    const classList = ref.current.classList
    if (classList.contains('active')) {
      classList.remove('active')
      setSelectList({
        ...selectList,
        active: selected
      })
      handleSelectActive && handleSelectActive(selected)
    } else {
      classList.add('active')
    }
  }


  if (selectList) {
    return (
      <SelectStyle className={`select_custom ${className}`} ref={ref}>
        <div className="select_custom_inner">
          {selectList && selectList.list.map(
            (opt, idx) =>
              selectList.active === opt.id && (
                <div
                  className="option_item selected"
                  key={'selected_' + opt.id + idx}
                  onClick={() => onSelectActive(opt.id)}
                >
                  <div className="option_show_txt">
                    {placeholder && !showSelectBox && (
                      <div className={`placeholder ellipsis`}>
                        {placeholder}
                      </div>
                    )}
                    {showSelectBox && (
                      <div className="cnt_wrap">
                        <img className="img" src={opt.img} style={{display: opt.img ? "inline-flex" : "none"}}/>
                        {opt.svg &&
                        <div className="ico_svg">{opt.svg}</div>
                        }
                        <p className="txt ellipsis">{opt.value}</p>
                      </div>
                    )}
                    {!placeholder && !showSelectBox && <p className="txt ellipsis">{opt.value}</p>}
                  </div>
                  내려가기
                </div>
              )
          )}


          <ul className="option_list scroll">
            {selectList && selectList.list.map(
              (opt, idx) =>
                (!showSelectBox) ? (
                  <li className="option_item" key={opt.id + '_' + idx} onClick={() => onSelectActive(opt.id)}>
                    <div className="cnt_wrap">
                      {opt.img &&
                      <img className="img" src={opt.img}/>
                      }
                      {opt.svg &&
                      <div className="ico_svg">{opt.svg}</div>
                      }
                      <p className="txt ellipsis" onClick={handleValueChange}>{opt.value}</p>
                    </div>
                  </li>
                ) : (placeholder && !showSelectBox) ? (
                  <li className="option_item" key={opt.id + '_' + idx} onClick={() => onSelectActive(opt.id)}>
                    <div className="cnt_wrap">
                      {opt.img &&
                      <img className="img" src={opt.img}/>
                      }
                      {opt.svg &&
                      <div className="ico_svg">{opt.svg}</div>
                      }
                      <p className="txt ellipsis" onClick={handleValueChange}>{opt.value}</p>
                    </div>
                  </li>
                ) :  selectList.active !== opt.id && (
                  <li className="option_item" key={opt.id + '_' + idx} onClick={() => onSelectActive(opt.id)}>
                    <div className="cnt_wrap">
                      {opt.img &&
                      <img className="img" src={opt.img}/>
                      }
                      {opt.svg &&
                      <div className="ico_svg">{opt.svg}</div>
                      }
                      <p className="txt ellipsis" onClick={handleValueChange}>{opt.value}</p>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </SelectStyle>
    )
  } else {
    return <div>&nbsp;</div>
  }


}

const SelectRef = forwardRef(Select)
export default SelectRef;