import { IPCMessages } from '@constants/ipc-messages';

export const SERIAL_PORT_LIST = async () => {
  const serialPortList = window.electron.ipcRenderer.invoke(
    IPCMessages.SERIAL_PORT_LIST,
  );
  return serialPortList;
};
