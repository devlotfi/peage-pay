import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './text-input.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  textInputLabel: string;
  showLabel: boolean;
  showRightIcon: boolean;
  showLeftIcon: boolean;
  inputType:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'date'
    | 'datetime-local';
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof TextInput> & Props;

const meta: Meta<StorybookProps> = {
  component: TextInput,
  title: 'TextInput',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    textInputLabel: {
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
    inputType: {
      control: 'select',
      options: [
        'text',
        'number',
        'email',
        'password',
        'date',
        'datetime-local',
      ],
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
    textInputLabel: 'test',
    showLabel: true,
    showLeftIcon: true,
    showRightIcon: false,
    inputType: 'text',
    theme: 'LIGHT',
  },
  render: ({
    variant,
    textInputLabel,
    theme,
    showLabel,
    showLeftIcon,
    showRightIcon,
    inputType,
  }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <TextInput variant={variant} className="w-full mb-[1.5rem]">
            <TextInput.Main>
              {showLabel ? (
                <TextInput.Label>{textInputLabel}</TextInput.Label>
              ) : null}
              {showLeftIcon ? (
                <TextInput.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </TextInput.Icon>
              ) : null}
              <TextInput.Field type={inputType}></TextInput.Field>
              {showRightIcon ? (
                <TextInput.Icon position={'right'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </TextInput.Icon>
              ) : null}
            </TextInput.Main>
          </TextInput>
        </ThemeProvider>
      </div>
    );
  },
};
