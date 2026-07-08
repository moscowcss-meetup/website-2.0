import BlockTitle from '@moscowcss/ui/components/BlockTitle';

export default {
  title: 'Components/BlockTitle',
  component: BlockTitle,
};

export const Default = {
  args: {
    slots: { default: 'Программа' },
  },
};

export const White = {
  args: {
    white: true,
    slots: { default: 'Программа' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
