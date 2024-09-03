import { RadioButton } from './RadioButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/RadioButton',
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default_01 = {
  args: {
    text : '라디오1',
    name : 'radio1',
    defaultChecked : true,
  },
};

export const Default_02 = {
  args: {
    text : '라디오2',
    name : 'radio1',
  },
};

export const ClassCheck_01 = {
  args: {
    text : '라디오1',
    name : 'radio2',
    className: 'check',
    defaultChecked: true
  },
};

export const ClassCheck_02 = {
  args: {
    text : '라디오2',
    name : 'radio2',
    className: 'check',
    defaultChecked: false,
  },
};

export const Disabled_01 = {
  args: {
    text : '라디오1',
    name : 'radio3',
    disabled: true,
    defaultChecked: true,
  },
};

export const Disabled_02 = {
  args: {
    text : '라디오2',
    name : 'radio3',
    disabled: true,
  },
};

