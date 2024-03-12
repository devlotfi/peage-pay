import type { Meta, StoryObj } from '@storybook/react';
import LocationPicker from './location-picker.component';
import { ComponentProps, useRef } from 'react';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import Button from '../button/button.component';

interface Props {
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof LocationPicker> & Props;

const meta: Meta<StorybookProps> = {
  component: LocationPicker,
  title: 'LocationPicker',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    theme: 'LIGHT',
  },
  render: ({ theme }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const modalRef = useRef(null);

    const openModal = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      modalRef.current.showModal();
    };

    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Button onClick={() => openModal()}>
            <Button.Content>Open</Button.Content>
          </Button>
          <LocationPicker modalRef={modalRef}></LocationPicker>
        </ThemeProvider>
      </div>
    );
  },
};
