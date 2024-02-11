import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './text-area.component';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  textAreaLabel: string;
  showLabel: boolean;
  showRightIcon: boolean;
  showLeftIcon: boolean;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof TextArea> & Props;

const meta: Meta<StorybookProps> = {
  component: TextArea,
  title: 'TextArea',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    textAreaLabel: {
      control: 'text',
    },
    showLabel: {
      control: 'boolean',
    },
    showRightIcon: {
      control: 'boolean',
    },
    showLeftIcon: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'success',
        'error',
        'warning',
        'edge-100',
        'edge-200',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const Base: Story = {
  args: {
    variant: 'edge-100',
    textAreaLabel: 'test',
    showLabel: true,
    showLeftIcon: true,
    showRightIcon: false,
    theme: 'LIGHT',
  },
  render: ({
    variant,
    textAreaLabel,
    theme,
    showLabel,
    showLeftIcon,
    showRightIcon,
  }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <TextArea variant={variant} className="w-full mb-[1.5rem]">
            <TextArea.Main>
              {showLabel ? (
                <TextArea.Label>{textAreaLabel}</TextArea.Label>
              ) : null}
              {showLeftIcon ? (
                <TextArea.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </TextArea.Icon>
              ) : null}
              <TextArea.Field></TextArea.Field>
              {showRightIcon ? (
                <TextArea.Icon position={'right'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </TextArea.Icon>
              ) : null}
            </TextArea.Main>
          </TextArea>
        </ThemeProvider>
      </div>
    );
  },
};
