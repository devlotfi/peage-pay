import {
  faAt,
  faEnvelope,
  faKey,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  ButtonOutline,
  Checkbox,
  Link,
  MenuItem,
  TextInput,
} from '@peage-pay/web-shared';

export function App() {
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

  return (
    <div className="bg-base-100 min-h-screen flex flex-col text-base-content">
      <div className="min-h-[4rem] flex items-center px-[1rem] border-edge-100 border-b-[1px]">
        <Button variant={'primary'} onClick={toggleTheme}>
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>Toggle theme</Button.Content>
        </Button>
      </div>

      <div className="content">
        <h1>content</h1>

        <TextInput variant={'success'} className="mb-[1rem]">
          <TextInput.TextInputMain>
            <TextInput.TextInputLabel>E-mail</TextInput.TextInputLabel>
            <TextInput.TextInputIcon position={'left'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </TextInput.TextInputIcon>
            <TextInput.TextInputField
              name="lol"
              type="datetime-local"
            ></TextInput.TextInputField>
            <TextInput.TextInputIcon position={'right'}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.TextInputIcon>
          </TextInput.TextInputMain>
        </TextInput>
        <TextInput className="mb-[1rem]">
          <TextInput.TextInputMain>
            <TextInput.TextInputLabel htmlFor="email">
              E-mail
            </TextInput.TextInputLabel>
            <TextInput.TextInputIcon position={'left'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </TextInput.TextInputIcon>
            <TextInput.TextInputField
              name="email"
              type="email"
              placeholder="E-mail"
              id="email"
            ></TextInput.TextInputField>
          </TextInput.TextInputMain>
          <TextInput.TextInputInfoMessage>
            Info message
          </TextInput.TextInputInfoMessage>
        </TextInput>
        <MenuItem variant={'success'} className="w-full">
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>lol</MenuItem.MenuItemText>
        </MenuItem>
        <MenuItem variant={'base-200'} className="w-full">
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>lol</MenuItem.MenuItemText>
        </MenuItem>

        <Link href="#">lol</Link>

        <Checkbox>
          <Checkbox.Label htmlFor="lol">lol</Checkbox.Label>
          <Checkbox.CheckboxInput id="lol"></Checkbox.CheckboxInput>
        </Checkbox>

        <ButtonOutline variant={'primary'}>
          <ButtonOutline.Icon position={'left'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </ButtonOutline.Icon>
          <ButtonOutline.Content>test</ButtonOutline.Content>
          <ButtonOutline.Icon position={'right'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </ButtonOutline.Icon>
        </ButtonOutline>

        <MenuItem>
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>lol</MenuItem.MenuItemText>
        </MenuItem>
        <MenuItem variant={'primary'}>
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>lol</MenuItem.MenuItemText>
        </MenuItem>
        <MenuItem variant={'base-200'}>
          <MenuItem.MenuItemIcon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.MenuItemIcon>
          <MenuItem.MenuItemText>lol</MenuItem.MenuItemText>
        </MenuItem>

        <Button variant={'base-200'} className="min-h-[4rem]">
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>
            <div className="flex flex-col items-start">
              <div className="">test</div>
              <div className="">details about</div>
            </div>
          </Button.Content>
          <Button.Icon position={'right'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Button.Icon>
        </Button>

        <Button variant={'primary'}>
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>lol button</Button.Content>
          <Button.Icon position={'right'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Button.Icon>
        </Button>

        <Button variant={'base-100'}>
          <Button.Icon position={'left'}>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>test</Button.Content>
          <Button.Icon position={'right'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Button.Icon>
        </Button>

        <Button variant={'base-100'}>
          <Button.Icon>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Button.Icon>
        </Button>
      </div>
    </div>
  );
}

export default App;
