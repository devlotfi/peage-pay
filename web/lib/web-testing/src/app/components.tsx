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
  Select,
  TextArea,
  TextInput,
} from '@peage-pay/web-shared';

const Components = () => {
  const toggleTheme = () => {
    const htmlTag = document.querySelector('html');

    if (htmlTag) {
      if (htmlTag?.dataset.theme === 'DARK') {
        htmlTag.dataset.theme = 'LIGHT';
      } else {
        htmlTag.dataset.theme = 'DARK';
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
          <TextInput.Main>
            <TextInput.Label>E-mail</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field name="lol" type="datetime-local"></TextInput.Field>
            <TextInput.Icon position={'right'}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextInput.Icon>
          </TextInput.Main>
        </TextInput>
        <Select className="mb-[1rem]" variant={'primary'}>
          <Select.Main>
            <Select.Label htmlFor="email">E-mail</Select.Label>
            <Select.Icon position={'left'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </Select.Icon>
            <Select.Field name="email" id="email">
              <option value="lol1">lol1</option>
              <option value="lol1">lol1</option>
              <option value="lol1">lol1</option>
              <option value="lol1">lol1</option>
            </Select.Field>
            <Select.Icon position={'right'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </Select.Icon>
          </Select.Main>
          <Select.InfoMessage>Info message</Select.InfoMessage>
        </Select>
        <TextInput className="mb-[1rem]">
          <TextInput.Main>
            <TextInput.Label htmlFor="email">E-mail</TextInput.Label>
            <TextInput.Icon position={'left'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </TextInput.Icon>
            <TextInput.Field
              name="email"
              type="email"
              placeholder="E-mail"
              id="email"
            ></TextInput.Field>
          </TextInput.Main>
          <TextInput.InfoMessage>Info message</TextInput.InfoMessage>
        </TextInput>
        <MenuItem variant={'success'} className="w-full">
          <MenuItem.Icon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.Icon>
          <MenuItem.Text className="flex justify-between flex-1">
            lol <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.Text>
        </MenuItem>
        <MenuItem variant={'base-200'} className="w-full">
          <MenuItem.Icon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.Icon>
          <MenuItem.Text>lol</MenuItem.Text>
        </MenuItem>

        <Link href="#">lol</Link>

        <Checkbox></Checkbox>

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
          <MenuItem.Icon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.Icon>
          <MenuItem.Text>lol</MenuItem.Text>
        </MenuItem>
        <MenuItem variant={'primary'}>
          <MenuItem.Icon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.Icon>
          <MenuItem.Text>lol</MenuItem.Text>
        </MenuItem>
        <MenuItem variant={'base-200'}>
          <MenuItem.Icon>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </MenuItem.Icon>
          <MenuItem.Text>lol</MenuItem.Text>
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

        <TextArea variant={'success'} className="mb-[1rem]">
          <TextArea.Main>
            <TextArea.Label>E-mail</TextArea.Label>
            <TextArea.Icon position={'left'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </TextArea.Icon>
            <TextArea.Field name="lol"></TextArea.Field>
            <TextArea.Icon position={'right'}>
              <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            </TextArea.Icon>
          </TextArea.Main>
        </TextArea>
        <TextArea variant={'edge-100'} className="mb-[1rem]">
          <TextArea.Main>
            <TextArea.Label>E-mail</TextArea.Label>
            <TextArea.Icon position={'left'}>
              <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
            </TextArea.Icon>
            <TextArea.Field name="lol"></TextArea.Field>
          </TextArea.Main>
        </TextArea>

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
};

export default Components;
