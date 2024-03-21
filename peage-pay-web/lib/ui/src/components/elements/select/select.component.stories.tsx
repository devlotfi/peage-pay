import type { Meta, StoryObj } from '@storybook/react';
import Select from './select.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  selectLabel: string;
  showLabel: boolean;
  showRightIcon: boolean;
  showLeftIcon: boolean;
  selectOptions: JSX.Element;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Select> & Props;

const meta: Meta<StorybookProps> = {
  component: Select,
  title: 'Select',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    selectLabel: {
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
    selectLabel: 'test',
    showLabel: true,
    showLeftIcon: true,
    showRightIcon: false,
    selectOptions: (
      <>
        <option>test</option>
        <option>test</option>
        <option>test</option>
      </>
    ),
    theme: 'LIGHT',
  },
  render: ({
    variant,
    selectLabel,
    theme,
    showLabel,
    showLeftIcon,
    showRightIcon,
    selectOptions,
  }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Select variant={variant} className="w-full mb-[1.5rem]">
            <Select.Main>
              {showLabel ? <Select.Label>{selectLabel}</Select.Label> : null}
              {showLeftIcon ? (
                <Select.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </Select.Icon>
              ) : null}
              <Select.Field>{selectOptions}</Select.Field>
              {showRightIcon ? (
                <Select.Icon position={'right'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </Select.Icon>
              ) : null}
            </Select.Main>
          </Select>
        </ThemeProvider>
      </div>
    );
  },
};
