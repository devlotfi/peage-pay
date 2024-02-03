import { faAt, faEnvelope, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonOutline, Checkbox } from '@peage-pay/web-shared';

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
          <Button.Icon variant={'left'}>
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>Toggle theme</Button.Content>
        </Button>
      </div>

      <div className="content">
        <h1>content</h1>
        <Checkbox>
          <Checkbox.Label htmlFor="lol">lol</Checkbox.Label>
          <Checkbox.CheckboxInput id="lol"></Checkbox.CheckboxInput>
        </Checkbox>

        <ButtonOutline variant={'primary'}>
          <ButtonOutline.Icon variant={'left'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </ButtonOutline.Icon>
          <ButtonOutline.Content>test</ButtonOutline.Content>
          <ButtonOutline.Icon variant={'right'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </ButtonOutline.Icon>
        </ButtonOutline>

        <Button variant={'base-200'} className="min-h-[4rem]">
          <Button.Icon variant={'left'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>
            <div className="flex flex-col items-start">
              <div className="">test</div>
              <div className="">details about</div>
            </div>
          </Button.Content>
          <Button.Icon variant={'right'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Button.Icon>
        </Button>

        <Button variant={'primary'}>
          <Button.Icon variant={'left'}>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>lol button</Button.Content>
          <Button.Icon variant={'right'}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </Button.Icon>
        </Button>

        <Button variant={'base-100'}>
          <Button.Icon variant={'left'}>
            <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
          </Button.Icon>
          <Button.Content>test</Button.Content>
          <Button.Icon variant={'right'}>
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
