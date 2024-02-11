import type { Meta, StoryObj } from '@storybook/react';
import Modal from './modal.component';
import { ThemeProvider } from '@peage-pay/tailwind-global-config';
import { ComponentProps, useRef } from 'react';
import Button from '../button/button.component';

interface Props {
  theme: 'LIGHT' | 'DARK';
  modalHeader: JSX.Element;
  modalContent: JSX.Element;
  modalFooter: JSX.Element;
}

type StorybookProps = ComponentProps<typeof Modal> & Props;

const meta: Meta<StorybookProps> = {
  component: Modal,
  title: 'Modal',
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
    modalHeader: <>Modal header</>,
    modalContent: (
      <>
        test test test test test test test test test test test test test test
        test test test test test test test test test test test test test test
      </>
    ),
  },
  render: ({ theme, modalHeader, modalContent }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const modalRef = useRef(null);

    const openModal = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      modalRef.current.showModal();
    };

    const closeModal = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      modalRef.current.close();
    };

    return (
      <div id="theme-provider" data-theme={theme}>
        <ThemeProvider>
          <Button variant={'primary'} onClick={openModal}>
            <Button.Content>Open modal</Button.Content>
          </Button>
          <Modal modalRef={modalRef}>
            <Modal.Window>
              <Modal.Header>{modalHeader}</Modal.Header>
              <Modal.Content>{modalContent}</Modal.Content>
              <Modal.Footer className="justify-end">
                <Button onClick={closeModal} variant={'base-200'}>
                  <Button.Content>Close</Button.Content>
                </Button>
              </Modal.Footer>
            </Modal.Window>
          </Modal>
        </ThemeProvider>
      </div>
    );
  },
};
