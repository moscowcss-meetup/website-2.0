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

export const Inverse = {
  args: {
    tone: 'inverse',
    slots: { default: 'Как добраться' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
