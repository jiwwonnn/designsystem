import {ToggleSwitch} from './ToggleSwitch';

export default {
  title: 'Example/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default_01 = {
  args: {
    isOn: false,
    handleActive: () => console.log('Toggle clicked!'),
  },
};
