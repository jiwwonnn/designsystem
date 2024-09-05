import styled from 'styled-components'

export const DefaultButtonStyle = styled.button`
  min-width:80px;
  min-height:40px;
  font-size: inherit;
  border-radius: 4px;
  border: 1px solid black;
`

export const ButtonStyle = styled(DefaultButtonStyle)`
  &.linear {
    background: white;
    border: 1px solid ${props => props.theme};
    color: ${props => props.theme}
  }
  &.fill {
    background: ${props => props.theme ? props.theme : 'black'};
    color: #fff;
    border: 1px solid ${props => props.theme ? props.theme : 'black'};
  }
  &.rounded {
    border-radius: 45px;
  }
  &.sm {
    width: 110px;
    height: 40px;
  }
  &.md {
    width: 120px;
    height: 40px;
  }
  &.lg {
    width: 150px;
    height: 40px;
  }
  &.full {
    width: 100%;
    height: 100%;
  }
  &:disabled {
    cursor:not-allowed;
    border: 1px solid #d7d7d7;
    background: #e4e4e4;
    color:#b2b2b2;
  }
`

export const TextareaStyle = styled.div`
  .textarea_border {
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    padding: 16px 8px 16px 16px;
    &:has(textarea:focus) {
      border: 1px solid orange;
    }
    &:has(textarea:read-only) {
      background:#f8f8f8;
      pointer-events: none;
    }
    &:has(textarea:disabled) {
      pointer-events: none;
      background:#f8f8f8;
    }
    &:hover {
      border: 1px solid orange;
    }
  }
  textarea {
    font-family:inherit;
    border: 1px solid transparent;
    width: 100%;
    height: 100px;
    background:transparent;
    resize: none;
    color:#000;
    padding-right: 5px;
    font-family: inherit;


    &::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
    }

    
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #2f3542;
      border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: grey;
      border-radius: 6px;
    }
    
  }
  
  .count {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 4px;  
    color: #CCCCCC;
  }
  .error {
    display: block;
    margin-top: 4px;
    color: red;
  }
`

export const InputStyle = styled.div`
  input {
    position:relative;
    padding: 12px 16px;
    width: 100%;
    max-width:160px;
    height: 50px;
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    font-family: inherit;
    color: black;
    background: #fff;
    &:hover {
      border: 1px solid orange;
    }
    &:active , &:focus{
      outline: none;
      border: 1px solid orange;
    }
    
    &::placeholder {
      color: grey;
    }
    
    &:disabled {
      pointer-events: none;
      background: #f4f4f4;
      color:#bbb;
      &::placeholder {
        color: #bbb;
      }
    }
    &:read-only:not(:disabled) {
      pointer-events: none;
      color:#666;
      &::placeholder {
        color: #666;
      }
    }
  }
  .error {
    display: block;
    margin-top: 4px;
    color: red;
  }
`


export const RadioButtonStyle = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  &:hover {
    cursor: pointer;

    input,
    .circle_mark {
      border-color: orange !important;
    }
  }


  &:has(.radio:disabled) {
    cursor: default;

    &.check {
      input[type='radio'] {
        &:checked + .circle_mark {
          &:after {
            border-color: #d7d7d7;
            background: transparent !important;
          }
        }
      }
    }

    .circle_mark {
      background-color: #f4f4f4;
      border-color: #d7d7d7 !important;

      &:after {
        background:#a8a8a8 !important;
      }
    }

    .radio_label {
      color:#333;
    }
  }

  &.check {
    input[type='radio'] {
      position: absolute;

      &:checked + .circle_mark {
        background-color: orange;
        border-color: orange;

        &:after {
          position: absolute;
          content: '';
          top: 46%;
          left: 24%;
          display: table;
          width: 26%;
          height: 50%;
          border: 2px solid white;
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg) scale(0.7) translate(-65%, -65%);
          transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46), opacity 0.1s;
          background: transparent;
          border-radius: unset;
        }
      }
    }

    .circle_mark {
      display: inline-block;
      min-width: 24px;
      width: 24px;
      height: 24px;
      background-color: white;
      border: 1px solid #d7d7d7;
      border-radius: 50%;
      transition: 0.3s ease-out;
      position: relative;
    }
  }

  &.ghost {
    input[type='radio'] {
      &:checked + .circle_mark {
        background-color: transparent;
      }
    }

    .circle_mark {
      &:after {
        border-color: orange !important;
      }
    }
  }

  input[type='radio'] {
    display: none;

    &:checked + .circle_mark {
      border-color: orange;

      &:after {
        position: absolute;
        content: '';
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 60%;
        background: orange;
        border-radius: 100%;
      }
    }
  } //input

  .circle_mark {
    display: inline-block;
    padding: 3px;
    width: 24px;
    height: 24px;
    border: 1px solid #d7d7d7;
    border-radius: 100%;
    position: relative;
    transition: 0.3s ease-out;
  }

  .radio_label {
    display: inline-block;
    color: #3e3e3e;
  }

`


export const CheckboxStyle = styled.label`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  user-select: none;
  position: relative;

  &:hover {
    cursor: pointer;

    input,
    .checkmark {
      border-color: orange;
    }
  }

  // disable 경우,
  // - input 속성 :disabled 부여해야 함

  // 고정 checked 가 되어 사용자가 선택할 수 없는 경우,
  // - input 속성 :disabled + :defaultChecked 2가지 부여해야 함(checked 로 하면 오류남)

  &:has(.checkbox:disabled) {
    cursor: default;
   
    input {
      &:checked + .checkmark {
        background-color: #f4f4f4 !important;
      }
    }
    
    .checkmark {
      background-color: #f4f4f4;
      border-color: #d7d7d7;

      &:after {
        border-color: #a8a8a8;
      }
    }
  }

  // 커스텀체크박스 ghost 인 경우,
  &.ghost {
    input {
      &:checked + .checkmark {
        background-color: white !important;
      }
    }

    .checkmark {
      &:after {
        border-color: orange;
      }
    }
  }

  // 커스텀체크박스 circle 인 경우,
  &.circle {
    input {
      min-width: 24px;
      width: 24px;
      height: 24px;
      border-radius: 50%;

      &:checked + .checkmark {
        &:after {
          transform: rotate(45deg) scale(0.7) translate(-65%, -65%);
        }
      }
    }

    .checkmark {
      min-width: 24px;
      width: 24px;
      height: 24px;
      border-radius: 50%;

      &:after {
        left: 24%;
        width: 26%;
        height: 50%;
        border-width: 2px;
      }
    }
    
    &.dash {
      .checkmark {
        &:after {
          top: 50%;
          transform:translateX(-50%);
          left: 50%;
          width: 40%;
          border: 1px solid white;
          height: auto;
        }
      }
      
      input {
        &:checked + .checkmark {
          &:after {
            width: 50%;
            transform: scale(1) translate(-50%, -50%);
            transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
          }
        }
      }
    }
  }

  input {
    position: absolute;
    opacity: 0;
    width: 24px;
    height: 24px;

    &:checked + .checkmark {
      background-color: orange !important;
      border-color: orange;

      &:after {
        transform: rotate(45deg) scale(1) translate(-50%, -50%);
        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
      }
    }
    
  }

  .checkmark {
    display: inline-block;
    min-width: 24px;
    width: 24px;
    height: 24px;
    background-color: white;
    border: 1px solid #d7d7d7;
    border-radius: 2px;
    transition: 0.3s ease-out;
    position: relative;

    &:after {
      position: absolute;
      content: '';
      top: 46%;
      left: 30%;
      display: table;
      width: 20%;
      height: 42%;
      border: 2px solid white;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg) scale(0) translate(-50%, -50%);
      transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    }
  }

  .svg_wrap {
    margin-right: -4px;
    min-width: 24px;
    width: 24px;
    height: 24px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .checkbox_label {
    display: inline-block;
    font-size: 18px;
  }
`

export const SelectStyle = styled.div`
  width: 100%;
  //max-width: 320px; //각 페이지마다 특정 최대 max-width 값 변경시, 여기값만 조정하면 됨
  max-width: 100%; //각 페이지마다 특정 최대 max-width 값 변경시, 여기값만 조정하면 됨
  height: 50px;
  display: inline-block;
  overflow: visible;
  position: relative;

  .placeholder {
    color: #999;
    white-space: normal;
    margin-left: -4px;
  }


  .select_custom_inner {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    .option_show_txt {
      width: calc(100% - 32px);
    }
  }

  .option_list {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .option_item {
    padding: 0 16px;
    width: 100%;
    height: 50px;
    background: white;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    color: #999;

    .cnt_wrap {
      margin-left: -4px;
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4px;

      .img {
        height: 24px;
        width: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .txt {
        line-height: normal;
      }
      
      .ico_svg {
        width: 24px;
        min-width: 24px;
        height: 24px;
        
        svg {
          width: 100%;
          min-width: 100%;
          height: 100%;
        }
      }
    }

    &.selected {
      position: relative;
      border: 1px solid #d7d7d7;
      border-radius: 4px;
      gap: 8px;
      transition: 0.3s ease-out;
      color: #333;

      .cnt_wrap {
        //width: calc(100% - 34px);
        width: 100%;
      }

      .arr_down_ico,
      .arr_up_ico {
        min-width: 24px;
        min-height: 24px;
        width: 24px;
        height: 24px;
        transition: 0.3s ease-out;

        path {
          stroke: #b2b2b2;
          transition: 0.3s ease-out;
        }
      }
    }
  } // option_item

  //-----------hover
  &:not(.disabled):not(.readonly):hover {
    .option_item {
      &.selected {
        border-color: orange;

        .arr_down_ico,
        .arr_up_ico {
          path {
            stroke: orange;
          }
        }
      }
    }
  }

  //-----------active
  &:not(.disabled):not(.readonly).active {
    z-index: 6;

    .option_item {
      &.selected {
        border-color: orange;

        .arr_down_ico,
        .arr_up_ico {
          transform: rotate(180deg);

          path {
            stroke: orange;
          }
        }
      }
    }

    .option_list {
      margin-top: 4px;
      max-height: 150px;
      background: white;
      border: 1px solid #d7d7d7;
      border-radius: 4px;
      overflow-y: auto;
      visibility: visible;
      transition: 0.3s ease-out;
      transition-property: max-height, visibility;

      .option_item {
        color: #666;

        &:hover {
          background: #f4f4f4;
          color: #3e3e3e;
        }
      }
    }
  }

  //------disabled
  &.disabled {
    pointer-events: none;

    .select_custom_inner {
      cursor: default;
    }

    .option_item {
      background: #f4f4f4;

      &.selected {
        color: #bbb;
      }
    }
  }

  //-------readonly
  &.readonly {
    .select_custom_inner {
      cursor: default;
    }

    .option_item {
      background: #f4f4f4;

      &.selected {
        color: #bbb;
      }
    }
  }

`

export const TabMenuStyle = styled.div`
  border-bottom: 1px solid #d7d7d7;
  padding: 0 10px;
  .tab_list {
    display: flex;
    gap: 8px;
    .tab_item {
      button {
        position:relative;
        min-width:70px;
        margin: 15px 0;
        padding: 0 4px;
        font-size: 16px;
        &.active {
          font-weight: 700;
          &:after {
            position: absolute;
            content:"";
            display: block;
            width: 100%;
            height: 3px;  
            background:orange;
            left: 0;
            bottom: -17px;
          }
        }
      }
    }
  }
`


// class = hidden
// position: absolute;
// top: 0;
// left: 0;
// font-size: 0;
export const PaginationStyle = styled.div`
  .hidden {
     position: absolute;
     top: 0;
     left: 0;
     font-size: 0;
  }
  margin: 80px auto 0;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 0;
    width: 50px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    border-left: 1px solid #dedede;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    background: white;
    transition: 0.3s ease-out;

    svg {
      width: 32px;
      height: 32px;

      path {
        transition: 0.3s ease-out;
      }
    }

    &:first-child {
      border-radius: 4px 0 0 4px;
    }

    &:last-child {
      border-right: 1px solid #dedede;
      border-radius: 0 4px 4px 0;
    }

    // hover, active 경우
    &:not(:disabled):hover,
    &:not(:disabled):active,
    &:not(:disabled).active {
      color: white;
      background: orange;
      border-color: orange;
      
      & + button {
        border-left: 1px solid orange;
      }

      &.prev,
      &.next {
        path {
          fill: white;
        }
      }

      &.front,
      &.end {
        path {
          fill: white;
        }
      }
    }

    // disabled 경우
    &:disabled {
      color: #a8a8a8;
      cursor: default;

      &.prev,
      &.next {
        path {
          fill: #a8a8a8;
        }
      }

      &.front,
      &.end {
        path {
          fill: #a8a8a8;
        }
      }
    }
  }
`


export const ToggleSwitchStyle = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  background-color: ${(props) => (props.isOn ? "#4caf50" : "#ccc")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
  .bbb {
    width: 23px;
    height: 23px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: ${(props) => (props.isOn ? "calc(100% - 24px)" : "1px")};
    transition: left 0.3s;
  }
`