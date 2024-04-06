import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './title-bar.css';
import {
  faTimes,
  faWindowMaximize,
  faWindowMinimize,
} from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../elements/icon-button/icon-button.component';
import TitleBarLayout from './title-bar-layout.layout';
import { TitleBarIPCMessages } from './title-bar-ipc-messages';

interface TitleBarProps {
  title: string;
  windowIcon: any;
}

declare global {
  interface Window {
    electron: any;
    api: unknown;
  }
}

export const TitleBar = ({ title, windowIcon }: TitleBarProps): JSX.Element => {
  const closeWindow = () => {
    window.electron.ipcRenderer.invoke(TitleBarIPCMessages.CLOSE);
  };
  const maximiseWindow = () => {
    window.electron.ipcRenderer.invoke(TitleBarIPCMessages.MAXIMIZE);
  };
  const minimiseWindow = () => {
    window.electron.ipcRenderer.invoke(TitleBarIPCMessages.MINIMIZE);
  };

  return (
    <div className="title-bar-drag-zone min-h-[2.5rem] sticky top-0 z-50 w-full left-0 bg-base-100 flex justify-between items-center border-b-[1px] border-edge-200">
      <div className="flex items-center">
        <img
          className="h-[1.5rem] mx-[0.5rem]"
          src={windowIcon}
          alt="PeagePay"
        />
        <div className="flex font-normal text-[10pt]">{title}</div>
      </div>

      <div className="flex">
        <IconButton
          onClick={minimiseWindow}
          className="title-bar-btn ml-[0.5rem] mr-0 min-h-[1.7rem] min-w-[1.7rem] h-[1.7rem] w-[1.7rem]"
          variant="base-200"
        >
          <FontAwesomeIcon icon={faWindowMinimize}></FontAwesomeIcon>
        </IconButton>
        <IconButton
          onClick={maximiseWindow}
          className="title-bar-btn ml-[0.5rem] mr-0 min-h-[1.7rem] min-w-[1.7rem] h-[1.7rem] w-[1.7rem]"
          variant="base-200"
        >
          <FontAwesomeIcon icon={faWindowMaximize}></FontAwesomeIcon>
        </IconButton>
        <IconButton
          onClick={closeWindow}
          className="title-bar-btn mx-[0.5rem] min-h-[1.7rem] min-w-[1.7rem] h-[1.7rem] w-[1.7rem]"
          variant="error"
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </IconButton>
      </div>
    </div>
  );
};
TitleBar.Layout = TitleBarLayout;

export default TitleBar;
