import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './breadcrumbs.component';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { ComponentProps } from 'react';
import Button from '../button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface Props {
  checkboxLabel: string;
  theme: 'LIGHT' | 'DARK';
}

type StorybookProps = ComponentProps<typeof Breadcrumbs> & Props;

const meta: Meta<StorybookProps> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
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
    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Breadcrumbs className="m-[1rem]">
            <Breadcrumbs.Item>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Button variant={'base-100'}>
                <Button.Icon position={'left'}>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Button.Icon>
                <Button.Content>Username</Button.Content>
                <Button.Icon position={'right'}></Button.Icon>
              </Button>
            </Breadcrumbs.Item>
          </Breadcrumbs>
        </ThemeProvider>
      </div>
    );
  },
};
