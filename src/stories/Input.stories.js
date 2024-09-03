import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Input',
  component: Input,
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
export const Default = {
  args: {
    placeholder: 'placeholder',
  },
};

export const Error = {
  args: {
    placeholder: 'placeholder',
    error: true,
  },
};

export const DisabledPlaceholder = {
  args: {
    disabled: 'disabled',
    placeholder: 'placehoder'
  },
};

export const ReadonlyPlaceholder = {
  args: {
    placeholder: 'placeholder',
    readOnly: 'readOnly',
  },
};

