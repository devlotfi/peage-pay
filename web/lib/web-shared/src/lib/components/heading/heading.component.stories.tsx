import type { Meta, StoryObj } from '@storybook/react';
import Heading from './heading.component';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { ComponentProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  headingContent: string;
  headingFontSize: number;
  headingIcon: JSX.Element;
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

export const NoIcon: Story = {
  args: {
    headingContent: 'test',
    theme: 'LIGHT',
  },
  render: ({ variant, headingContent, headingFontSize, theme }) => {
    return (
      <div id="theme-provider" data-theme={theme || 'LIGHT'}>
        <ThemeProvider>
          <Heading
            variant={variant}
            style={{
              fontSize: headingFontSize,
            }}
          >
            <Heading.Text>{headingContent}</Heading.Text>
          </Heading>
        </ThemeProvider>
      </div>
    );
  },
};

export const RightIcon: Story = {
  args: {
    headingContent: 'test',
    headingIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    theme: 'LIGHT',
  },
  render: ({
    variant,
    headingContent,
    headingFontSize,
    headingIcon,
    theme,
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
            <Heading.Text>{headingContent}</Heading.Text>
            <Heading.Icon position={'right'}>{headingIcon}</Heading.Icon>
          </Heading>
        </ThemeProvider>
      </div>
    );
  },
};

export const LeftIcon: Story = {
  args: {
    headingContent: 'test',
    headingIcon: <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>,
    theme: 'LIGHT',
  },
  render: ({
    variant,
    headingContent,
    headingFontSize,
    headingIcon,
    theme,
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
            <Heading.Icon position={'left'}>{headingIcon}</Heading.Icon>
            <Heading.Text>{headingContent}</Heading.Text>
          </Heading>
        </ThemeProvider>
      </div>
    );
  },
};
