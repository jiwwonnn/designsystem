import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
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
export const ThemeVariant1 = {
  args: {
    handleBtnClick: fn(),
  },
};

export const ThemeVariant2 = {
  args: {
    label: '버튼',
    variant:'linear',
    theme: 'blue',
    handleBtnClick: fn(),
  },
};

export const ThemeVariant3 = {
  args: {
    label: '버튼',
    variant: 'fill',
    theme: 'purple',
  },
};

export const ThemeVariant4 = {
  args: {
    label: '버튼',
    variant: 'rounded',
  },
};

export const SizeSm = {
  args: {
    label: '버튼',
    size: 'sm',
  },
};

export const SizeMd = {
  args: {
    label: '버튼',
    size: 'md',
  },
};

export const SizeLg = {
  args: {
    label: '버튼',
    size: 'lg',
  },
};

export const SizeFull = {
  args: {
    label: '버튼',
    size: 'full',
    theme: 'orange',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};