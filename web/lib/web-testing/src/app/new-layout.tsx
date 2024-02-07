import {
  faAngleDown,
  faAngleLeft,
  faAt,
  faBars,
  faCaretDown,
  faCaretLeft,
  faKey,
  faTrash,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Dropdown,
  Heading,
  MenuDropdown,
  MenuItem,
  Modal,
  TextInput,
  Tooltip,
} from '@peage-pay/web-shared';
import { PeagePayAdminLogo } from '@peage-pay/assets';
import { useRef } from 'react';

export function NewLayout() {
  const toggleTheme = () => {
    const htmlTag = document.querySelector('html');

    if (htmlTag) {
      if (htmlTag?.dataset.theme === 'dark') {
        htmlTag.dataset.theme = 'light';
      } else {
        htmlTag.dataset.theme = 'dark';
      }
    }
  };

  const modalRef = useRef(null);

  return (
    <div className="flex">
      <h1>lol</h1>
      <Button onClick={() => modalRef.current.showModal()} variant={'success'}>
        <Button.Content>Open modal</Button.Content>
      </Button>
      <Modal modalRef={modalRef}>
        <Modal.Window>
          <Modal.Header>
            <Heading className="text-[17pt] p-[0.5rem]" variant={'error'}>
              <Heading.Icon position={'left'}>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </Heading.Icon>
              <Heading.Text>Test</Heading.Text>
            </Heading>
          </Modal.Header>
          <Modal.Content>
            <TextInput variant={'edge-100'} className="w-full mb-[1.5rem]">
              <TextInput.Main>
                <TextInput.Label>E-mail</TextInput.Label>
                <TextInput.Icon position={'left'}>
                  <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
                </TextInput.Icon>
                <TextInput.Field
                  name="lol"
                  type="datetime-local"
                ></TextInput.Field>
                <TextInput.Icon position={'right'}>
                  <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                </TextInput.Icon>
              </TextInput.Main>
            </TextInput>
            <h1>lol</h1>
          </Modal.Content>
          <Modal.Footer>
            <Button
              onClick={() => modalRef.current.close()}
              variant={'base-200'}
            >
              <Button.Content>Close modal</Button.Content>
            </Button>
          </Modal.Footer>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default NewLayout;
