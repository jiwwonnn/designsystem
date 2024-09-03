import React from 'react';
import Select from './Select';

export default {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const selectList = {
  active: 'select01',
  list: [
    { id: 'select01', value: '셀렉트01' },
    { id: 'select02', value: '셀렉트02' },
    { id: 'select03', value: '셀렉트03' }
  ]
};

export const Default = {
  args: {
    optionList: selectList,
  },
};
