import type { Meta, StoryObj } from '@storybook/react';
import Heading from './heading.component';
import { ThemeProvider } from '@peage-pay-web/tailwind-config';
import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  headingContent: string;
  headingFontSize: number;
  headingIcon: JSX.Element;
  showRightIcon: boolean;
  showLeftIcon: boolean;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Heading> & Props;

const meta: Meta<StorybookProps> = {
  component: Heading,
  title: 'Heading',
  argTypes: {
    theme: {
      control: 'select',
      options: ['LIGHT', 'DARK'],
    },
    showRightIcon: {
      control: 'boolean',
    },
    showLeftIcon: {
      control: 'boolean',
    },
    headingContent: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning'],
    },
    headingFontSize: {
      control: 'number',
    },
  },
};
export default meta;
type Story = StoryObj<StorybookProps>;

export const LeftIcon: Story = {
  args: {
    headingContent: 'test',
    headingIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    showLeftIcon: true,
    showRightIcon: false,
    headingFontSize: 30,
    theme: 'LIGHT',
  },
  render: ({
    variant,
    headingContent,
    headingFontSize,
    headingIcon,
    theme,
    showLeftIcon,
    showRightIcon,
  }) => {
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Heading
            variant={variant}
            style={{
              fontSize: headingFontSize,
            }}
          >
            {showLeftIcon ? (
              <Heading.Icon position={'left'}>{headingIcon}</Heading.Icon>
            ) : null}
            <Heading.Text>{headingContent}</Heading.Text>
            {showRightIcon ? (
              <Heading.Icon position={'right'}>{headingIcon}</Heading.Icon>
            ) : null}
          </Heading>
        </ThemeProvider>
      </div>
    );
  },
};
